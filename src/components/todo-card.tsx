import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
// import router from 'next/router';

import { TodoType } from '@/constants/todo-type';

import { EditDelete } from './edit-delete-dialog';
import { Button } from './ui/button';
type Props = {
  todo: TodoType;
  isDark?: boolean;
};

const TodoCard = ({ todo }: Props) => {
  const router = useRouter();
  return (
    <>
      <div
        // key={todo.id}
        className='flex-between my-3 w-full gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900'
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
          <div className='flex gap-6 text-sm'>
            <span className='font-normal dark:text-neutral-400'>
              {dayjs(todo.date).format('MMM D, YYYY')}
              {/* {todo.date} */}
            </span>
            <span
              className={`rounded-[8px] px-2 font-semibold ${
                todo.priority === 'HIGH'
                  ? 'bg-accent-red'
                  : todo.priority === 'MEDIUM'
                    ? 'bg-accent-yellow text-black'
                    : 'bg-accent-green'
              }`}
            >
              {todo.priority}
            </span>
          </div>
        </div>
        <div className='text-[12px]'>
          {/* <EditDelete id={todo.id} className='cursor-pointer text-white'>
            Hapus
          </EditDelete> */}
          <EditDelete
            id={todo.id}
            onDeleted={() => {
              // bisa pakai router refresh, query invalidation, atau state update
              router.refresh(); // jika pakai Next.js App Router
              // atau queryClient.invalidateQueries(['todos']);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
