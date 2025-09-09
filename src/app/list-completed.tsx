// list-completed.tsx

'use client';
import { CircleCheckBig } from 'lucide-react';
import { useEffect, useState } from 'react';

import GetList from '@/components/get-list';

import { getTodoList } from '@/services/service';

const ListComplete = () => {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList('/?completed=true');
      setComplete(data.totalTodos);
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

      <GetList queueParam='completed=true' showEdit={true} />
    </div>
  );
};

export default ListComplete;
