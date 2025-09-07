'use client';
import React, { useEffect, useState } from 'react';

import TodoCard from '@/components/todo-card';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';

const ListToday = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      setTodo(data.todos);
    };
    fetchData();
  }, []);
  return (
    <div>
      {todo.map((todos, index) => (
        <TodoCard key={index} todo={todos} />
      ))}
    </div>
  );
};

export default ListToday;
