// todo-card.tsx
import dayjs from 'dayjs';

import { TodoType } from '@/constants/todo-type';
import { useTodoStore } from '@/store/todo-store';

import { EditDelete2 } from './edit-delete-dialog2';
import TodoCheckbox from './todo-checkbox';
type Props = {
  todo: TodoType;
};

const TodoCard = ({ todo }: Props) => {
  const showEdit = useTodoStore((s) => s.showEdit);

  return (
    <>
      <div className='flex-between my-3 w-full gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900'>
        {/* checkbox */}
        <div>
          <TodoCheckbox tada={todo} />
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
        {!showEdit && (
          <div>
            <EditDelete2 todo={todo} />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoCard;
