'use client';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import TodoCard from '@/components/ui/todo-card';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';

import TopMenu from './top-menu';

const Home = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      setTodo(data.todos);
    };
    fetchData();
  }, []);

  return (
    <div className='custom-container'>
      <TopMenu />

      {todo.map((todos, index) => (
        <TodoCard key={index} todo={todos} />
      ))}
    </div>
  );
};

export default Home;
