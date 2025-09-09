'use client';

import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';

import GetList from '@/components/get-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { getTodoList } from '@/services/service';
import { dateQuery } from '@/utils/date';

const ListUpcoming = () => {
  const [complete, setComplete] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const today = dayjs();
  const upcomingDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => today.add(i + 1, 'day'));
  }, [today]);

  const queries = useMemo(() => {
    return upcomingDays.map((date) => {
      const formatted = date.format('YYYY-MM-DD');
      return `completed=false&${dateQuery(formatted)}`;
    });
  }, [upcomingDays]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList('', queries[activeIndex]);
      setComplete(data.totalTodos);
    };
    fetchData();
  }, [activeIndex, queries]);

  return (
    <div>
      <div className='flex items-center gap-2'>
        <div className='text-display-xs font-bold'>Upcoming</div>
        <div className='rounded-full bg-neutral-200 px-3 text-xs dark:bg-neutral-900'>
          {complete} item
        </div>
      </div>

      <div className='text-sm font-normal text-neutral-400'>
        {upcomingDays[activeIndex].format('MMM D, YYYY')}
      </div>

      <Tabs
        defaultValue='day0'
        className=''
        onValueChange={(val) => {
          const index = parseInt(val.replace('day', ''));
          setActiveIndex(index);
        }}
      >
        <TabsList>
          {upcomingDays.map((date, index) => (
            <TabsTrigger value={`day${index}`} key={index} className='flex-1'>
              {date.format('ddd D')}
            </TabsTrigger>
          ))}
        </TabsList>

        {queries.map((query, index) => (
          <TabsContent value={`day${index}`} key={index}>
            <GetList queueParam={query} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ListUpcoming;
