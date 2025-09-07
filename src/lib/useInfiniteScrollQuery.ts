import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

type UseInfiniteScrollQueryProps<T> = {
  queryKey: string[];
  queryFn: (pageParam: number) => Promise<{
    todos: T[];
    nextCursor: number | null;
    hasNextPage: boolean;
    totalTodos?: number;
  }>;
  enabled?: boolean;
  initialCursor?: number;
};

export const useInfiniteScrollQuery = <T>({
  queryKey,
  queryFn,
  enabled = true,
  initialCursor = 0,
}: UseInfiniteScrollQueryProps<T>) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam = initialCursor }) => queryFn(pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage && lastPage.todos.length > 0
          ? lastPage.nextCursor
          : undefined,
      initialPageParam: initialCursor,
      enabled,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    data,
    loadMoreRef,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
