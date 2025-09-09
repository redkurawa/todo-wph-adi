import { create } from 'zustand';

import { TodoType } from '@/constants/todo-type';

// import { Todo } from '@/types/todo';

interface PaginationState {
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

interface TodoState {
  todos: TodoType[];
  pagination: PaginationState | null;
  addTodos: (newTodos: TodoType[]) => void;
  resetTodos: () => void;
  setPagination: (pagination: PaginationState) => void;
  showEdit: boolean;
  setShowEdit: (value: boolean) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  pagination: null,
  addTodos: (newTodos) =>
    set((state) => {
      const combined = [...state.todos, ...newTodos];
      const unique = Array.from(
        new Map(combined.map((todo) => [todo.id, todo])).values()
      );
      return { todos: unique };
    }),
  resetTodos: () => set({ todos: [] }),
  setPagination: (pagination) => set({ pagination }),
  showEdit: false,
  setShowEdit: (value) => set({ showEdit: value }),
}));
