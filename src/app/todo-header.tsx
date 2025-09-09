'use client';
import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import GetList from '@/components/get-list';
import { TodoPriority } from '@/components/task-priority';

const TopMenu = () => {
  const { setTheme } = useTheme();
  const [priority, setPriority] = useState('');

  return (
    <>
      <div className='flex-between'>
        <div>
          <h1 className='sm:text-display-sm text-xl font-bold'>
            What’s on Your Plan Today?
          </h1>
          <h2 className='sm:text-md text-sm font-normal'>
            Your productivity starts now.
          </h2>
        </div>
        <div className='flex cursor-pointer gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-800 dark:bg-neutral-900'>
          <Sun
            className='bg-accent-yellow size-8 rounded-xl p-1 dark:bg-neutral-900'
            onClick={() => setTheme('light')}
          />
          <Moon
            className='dark:bg-primary-100 size-8 rounded-xl p-1'
            onClick={() => setTheme('dark')}
          />
        </div>
      </div>
      <div className='flex h-12 w-full items-center justify-between gap-3'>
        <div className='flex flex-1 rounded-2xl border border-neutral-300 px-3 dark:border-neutral-800 dark:bg-neutral-900'>
          <button className='flex-center size-7 rounded-full'>
            <Search size={18} className='text-gray-700' />
          </button>
          <input
            type='text'
            placeholder='Search'
            name='search'
            id='search'
            className='flex-1 text-sm text-neutral-400'
          />
        </div>
        <div className='dark flex gap-2 rounded-2xl border border-neutral-300 px-2.5 text-sm text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400'>
          <TodoPriority getPriority={setPriority} />
        </div>
      </div>
      {priority && <GetList queueParam={`priority=${priority}`} />}
    </>
  );
};

export default TopMenu;
