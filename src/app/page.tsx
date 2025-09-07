'use client';
import { useEffect, useState } from 'react';

import TodoCard from '@/components/todo-card';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';

import TodoFooter from './footer';
import ListPage from './list-page';
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
      <ListPage />
      {todo.map((todos, index) => (
        <TodoCard key={index} todo={todos} />
      ))}
      <TodoFooter />
    </div>
  );
};

export default Home;
