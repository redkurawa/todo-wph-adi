// list-completed.tsx

'use client';
import { CircleCheckBig } from 'lucide-react';
import { useEffect, useState } from 'react';

import TodoCard from '@/components/todo-card';

import { TodoType } from '@/constants/todo-type';
import { useInfiniteScrollQuery } from '@/lib/useInfiniteScrollQuery';
import { getTodoList } from '@/services/service';

const LIMIT = 10;

const ListComplete = () => {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList('/?completed=true');
      setComplete(data.totalTodos);
    };
    fetchData();
  }, []);

  const { data, loadMoreRef, isFetchingNextPage } =
    useInfiniteScrollQuery<TodoType>({
      queryKey: ['completedTodos'],
      queryFn: async (cursor) =>
        await getTodoList(
          `/scroll?completed=true&nextCursor=${cursor}&limit=${LIMIT}`
        ),
    });

  return (
    <div>
      <div className='flex items-center gap-2'>
        <CircleCheckBig />
        <span className='text-display-xs font-bold'>Completed</span>
        <div className='rounded-full bg-neutral-100 px-3 text-xs dark:bg-neutral-900'>
          {complete} item
        </div>
      </div>

      {data?.pages.map((page, pageIndex) =>
        page.todos.map((todo, index) => (
          <TodoCard
            key={todo.id ?? `${pageIndex}-${index}`}
            todo={todo}
            complete={true}
          />
        ))
      )}

      <div ref={loadMoreRef} className='h-10' />

      {isFetchingNextPage && (
        <div className='py-2 text-center text-sm text-neutral-500'>
          Loading more...
        </div>
      )}
    </div>
  );
};

export default ListComplete;
