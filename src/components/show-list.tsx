// file ShowList.tsx
'use client';

import { useEffect, useRef } from 'react';

import TodoFooter from '@/app/todo-footer';
import { useTodoStore } from '@/store/todo-store';

import TodoCard from './todo-card';

export default function ShowList() {
  const todos = useTodoStore((s) => s.todos);
  const pagination = useTodoStore((s) => s.pagination);
  const showEdit = useTodoStore((s) => s.showEdit);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current || !pagination) return;

    const { fetchNextPage, hasNextPage, isFetchingNextPage } = pagination;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [pagination]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      {!showEdit && (
        <div>
          <TodoFooter />
        </div>
      )}
      <div ref={sentinelRef} style={{ height: '1px' }} />
      {pagination?.isFetchingNextPage && <p>🔄 Loading more todos...</p>}
    </div>
  );
}
