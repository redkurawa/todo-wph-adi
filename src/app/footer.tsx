import { Plus } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

const CardFooter = () => {
  return (
    <div className='custom-container'>
      <Button className='text-md mx-auto flex h-12 w-full max-w-75 cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
        <Plus className='!h-5 !w-5 shrink-0 text-white' /> <span>Add Task</span>
      </Button>
    </div>
  );
};

export default CardFooter;
