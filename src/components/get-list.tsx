// file getlist.tsx
'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';
import { useTodoStore } from '@/store/todo-store';

interface Props {
  queueType: string;
  showEdit?: boolean;
}

interface TodoResponse {
  todos: TodoType[];
  nextCursor: number;
  hasNextPage: boolean;
}

export default function GetList({ queueType = '', showEdit = false }: Props) {
  const resetTodos = useTodoStore((s) => s.resetTodos);
  const addTodos = useTodoStore((s) => s.addTodos);
  const setPagination = useTodoStore((s) => s.setPagination);
  const setShowEdit = useTodoStore((s) => s.setShowEdit);

  // console.log('queueType getlist.ts:', queueType);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['todos', queueType],
      queryFn: async ({ pageParam = 0 }) => {
        const todoParam =
          queueType?.length == 0
            ? `scroll?nextCursor=${pageParam}`
            : `scroll?nextCursor=${pageParam}&${queueType}`;
        const res: TodoResponse = await getTodoList(todoParam);
        // console.log('res getlist.ts :', res);
        return res;
      },
      getNextPageParam: (lastPage) => {
        return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
      },
      initialPageParam: 0,
      staleTime: 1000 * 60 * 5,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    resetTodos();
    setShowEdit(showEdit);
  }, [queueType, resetTodos, showEdit, setShowEdit]);

  useEffect(() => {
    // resetTodos();
    if (data) {
      const allTodos = data.pages.flatMap((page) => page.todos);
      const uniqueTodos = Array.from(
        new Map(allTodos.map((todo) => [todo.id, todo])).values()
      );
      addTodos(uniqueTodos);
      setPagination({ fetchNextPage, hasNextPage, isFetchingNextPage });
    }
  }, [
    // queueType,
    data,
    addTodos,
    setPagination,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  ]);

  return null;
}
