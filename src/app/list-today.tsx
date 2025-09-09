'use client';
import React, { useEffect, useState } from 'react';

import GetList from '@/components/get-list';
import TodoCard from '@/components/todo-card';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';

interface Props {
  queueType: string;
}

const ListToday = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      setComplete(data.totalTodos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      setTodo(data.todos);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className='flex items-center gap-2'>
        <span className='text-display-xs font-bold'>Today</span>
        <div className='rounded-full bg-neutral-200 px-3 text-xs dark:bg-neutral-900'>
          {complete} item
        </div>
      </div>
      <GetList queueType='' />
      {/* {todo.map((todos, index) => (
        <TodoCard key={index} todo={todos} />
      ))} */}
    </div>
  );
};

export default ListToday;
