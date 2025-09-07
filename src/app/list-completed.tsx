'use client';
import { CircleCheckBig } from 'lucide-react';
import { useEffect, useState } from 'react';

import TodoCard from '@/components/todo-card';

import { TodoType } from '@/constants/todo-type';
import { getTodoList } from '@/services/service';

const ListComplete = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList('/?completed=true');
      setComplete(data.totalTodos); // ✅ Correct usage
      // console.log(`total :${data.totalTodos}`); // Optional debug
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList('/scroll?completed=true');
      setTodo(data.todos);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className='flex items-center gap-2'>
        <CircleCheckBig />
        <span className='text-display-xs font-bold'>Completed</span>
        <div className='rounded-full bg-neutral-100 px-3 text-xs dark:bg-neutral-900'>
          {complete} item
        </div>
      </div>
      {todo.map((todos, index) => (
        <TodoCard key={index} todo={todos} complete={true} />
      ))}
    </div>
  );
};

export default ListComplete;
