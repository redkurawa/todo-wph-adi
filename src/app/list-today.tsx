'use client';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';

import GetList from '@/components/get-list';

import { getTodoList } from '@/services/service';
import { dateQuery } from '@/utils/date';

const ListToday = () => {
  const [complete, setComplete] = useState(0);
  const datequery = dateQuery(dayjs().format('YYYY-MM-DD'));

  const query = useQuery({
    queryKey: ['today'],
    queryFn: async () => {
      const data = await getTodoList('', datequery);
      setComplete(data.totalTodos);
      return data;
    },
  });

  console.log(query);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getTodoList('', datequery);
  //     setComplete(data.totalTodos);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className='flex items-center gap-2'>
        <div className='text-display-xs font-bold'>Today</div>
        <div className='rounded-full bg-neutral-200 px-3 text-xs dark:bg-neutral-900'>
          {complete} item
        </div>
      </div>
      <div className='text-sm font-normal text-neutral-400'>
        {dayjs().format('MMM D, YYYY')}
      </div>
      <GetList queueParam={datequery} />
    </div>
  );
};

export default ListToday;
