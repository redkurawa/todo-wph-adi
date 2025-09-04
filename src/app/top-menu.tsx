import { Moon, Sun } from 'lucide-react';
import React from 'react';

const TopMenu = () => {
  return (
    <>
      <div className='flex-between'>
        <div>
          <h1 className='text-display-sm font-bold'>
            What’s on Your Plan Today?
          </h1>
          <h2 className='text-md font-normal'>Your productivity starts now.</h2>
        </div>
        <div className='flex gap-2 rounded-2xl border border-neutral-300 bg-neutral-200 p-1'>
          <Sun className='bg-primary-100 size-8 rounded-xl p-1' />
          <Moon className='size-8 rounded-xl p-1' />
        </div>
      </div>
      <input type='text' placeholder='Search' />
    </>
  );
};

export default TopMenu;
