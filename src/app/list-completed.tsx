// 'use client';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { CircleCheckBig } from 'lucide-react';
// import { useRef, useEffect, useState } from 'react';

// import TodoCard from '@/components/todo-card';

// import { TodoType } from '@/constants/todo-type';
// import { getTodoList } from '@/services/service';

// const LIMIT = 10;

// const ListComplete = () => {
//   const loadMoreRef = useRef<HTMLDivElement | null>(null);

//   const [complete, setComplete] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTodoList('/?completed=true');
//       setComplete(data.totalTodos); // ✅ Correct usage
//       console.log(`total :${data.totalTodos}`); // Optional debug
//     };
//     fetchData();
//   }, []);

//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
//     useInfiniteQuery({
//       queryKey: ['completedTodos'],
//       queryFn: async ({ pageParam = 0 }) => {
//         return await getTodoList(
//           `/scroll?completed=true&nextCursor=${pageParam}&limit=${LIMIT}`
//         );
//       },
//       getNextPageParam: (lastPage) => {
//         return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
//       },
//       initialPageParam: 0,
//     });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
//           fetchNextPage();
//         }
//       },
//       { threshold: 1 }
//     );

//     if (loadMoreRef.current) {
//       observer.observe(loadMoreRef.current);
//     }

//     return () => {
//       if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
//     };
//   }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

//   return (
//     <div>
//       <div className='flex items-center gap-2'>
//         <CircleCheckBig />
//         <span className='text-display-xs font-bold'>Completed</span>
//         <div className='rounded-full bg-neutral-100 px-3 text-xs dark:bg-neutral-900'>
//           {complete} item
//         </div>
//       </div>

//       {data?.pages.map((page, pageIndex) =>
//         page.todos.map((todo: TodoType, index: number) => (
//           <TodoCard key={`${pageIndex}-${index}`} todo={todo} complete={true} />
//         ))
//       )}

//       <div ref={loadMoreRef} className='h-10' />

//       {isFetchingNextPage && (
//         <div className='py-2 text-center text-sm text-neutral-500'>
//           Loading more...
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListComplete;

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
