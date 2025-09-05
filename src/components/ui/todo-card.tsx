import { title } from 'process';

import React from 'react';

import { TodoType } from '@/constants/todo-type';

import { Button } from './button';

type Props = {
  todo: TodoType;
  isDark?: boolean;
};

const TodoCard = ({ todo, isDark = false }: Props) => {
  return (
    <>
      <div
        key={todo.id}
        className='flex-between my-3 w-full gap-4 rounded-2xl border border-neutral-300 bg-neutral-200 p-3'
      >
        <div>
          <Button
            variant='outline'
            size='box'
            className='border-neutral-300 bg-neutral-200'
          ></Button>
        </div>
        <div className='flex-1'>
          <span className='text-md block font-semibold'>{todo.title}</span>
          <span className='text-sm font-normal'>{todo.date}</span>
          {todo.priority}
        </div>
        <div>
          ...{todo.id},{isDark}
        </div>
      </div>
    </>
  );
};

export default TodoCard;
