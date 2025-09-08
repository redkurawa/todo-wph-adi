import dayjs from 'dayjs';

import { TodoType } from '@/constants/todo-type';

import { EditDelete } from './edit-delete-dialog';
import { Button } from './ui/button';
type Props = {
  todo: TodoType;
  complete?: boolean;
  // index: number;
};

const TodoCard = ({ todo, complete = false }: Props) => {
  return (
    <>
      <div
        // key={todo.id}
        className='flex-between my-3 w-full gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900'
      >
        <div>
          {/* checkbox */}
          <Button
            variant='outline'
            size='box'
            className='border-neutral-300 bg-neutral-200'
          >
            {/* {index + 1} */}
          </Button>
        </div>
        <div className='flex-1'>
          <span
            className={`sm:text-md block text-sm font-semibold ${todo.completed && 'text-neutral-400 line-through'}`}
          >
            {todo.title}
          </span>
          <div className='flex gap-6 text-xs sm:text-sm'>
            <span
              className={`font-normal dark:text-neutral-400 ${todo.completed && 'text-neutral-400'}`}
            >
              {dayjs(todo.date).format('MMM D, YYYY')}
              {/* {todo.date} */}
            </span>
            <span
              className={`rounded-[8px] px-2 text-xs font-semibold sm:text-sm ${
                todo.priority === 'HIGH'
                  ? 'bg-accent-red text-white'
                  : todo.priority === 'MEDIUM'
                    ? 'bg-accent-yellow text-black'
                    : 'bg-accent-green text-white'
              }`}
            >
              {todo.priority}
            </span>
          </div>
        </div>
        {!complete && (
          <div>
            <EditDelete id={todo.id} />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoCard;
