import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const TopMenu = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className='flex-between'>
        <div>
          <h1 className='text-display-sm font-bold'>
            What’s on Your Plan Today?
          </h1>
          <h2 className='text-md font-normal'>Your productivity starts now.</h2>
        </div>
        {/* dark button */}
        <div className='flex cursor-pointer gap-2 rounded-2xl border border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-900 dark:bg-neutral-950'>
          <Sun
            className='size-8 rounded-xl p-1'
            onClick={() => setTheme('light')}
          />
          <Moon
            className='size-8 rounded-xl p-1'
            onClick={() => setTheme('dark')}
          />
        </div>
      </div>
      <div className='flex h-12 w-full items-center justify-between gap-3'>
        <div className='flex flex-1 rounded-2xl border border-neutral-300 px-3'>
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
        <div className='flex gap-2 rounded-2xl border border-neutral-300 px-2.5 text-sm text-neutral-900'>
          Priority
        </div>
      </div>
      {/* today incoming box */}
      <div className='flex-between w-full rounded-2xl border border-neutral-300 p-2 text-sm'>
        <div className='flex-1 rounded-md border border-amber-400 text-center'>
          Today
        </div>
        <div className='flex-1 rounded-[8px] border border-blue-400 text-center'>
          Incoming
        </div>
        <div className='flex-1 rounded-[8px] border border-green-400 text-center'>
          Completed
        </div>
      </div>
    </>
  );
};

export default TopMenu;
