// components/UserFormDialog.tsx
'use client';

import dayjs from 'dayjs';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { DatePicker } from '@/components/date-picker';
import { TodoPriority } from '@/components/task-priority';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { api } from '@/services/api';

export default function TodoFooter() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [priority, setPriority] = useState('');

  const onSubmit = async (data: any) => {
    const payload = {
      title: data.title,
      completed: false,
      date: dayjs(selectedDate).toISOString(),
      priority,
    };
    console.log('Form values:', data);
    try {
      const response = await api.post('/todos', payload);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Failed to submit:', error);
    }

    setOpen(false);
    reset();
    setPriority('MEDIUM');
    setSelectedDate(new Date());
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='text-md mx-auto flex h-12 w-full max-w-75 cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
          <Plus className='!h-5 !w-5 shrink-0 text-white' />{' '}
          <span>Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogDescription></DialogDescription>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-display-xs font-bold'>
            Add Task
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-2'>
            {/* <Label htmlFor='title'>Title</Label> */}

            <Input
              id='title'
              {...register('title', { required: true })}
              placeholder='Enter your task'
            />
          </div>

          <TodoPriority getPriority={setPriority} />
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
          <DialogFooter>
            <Button className='text-md mx-auto flex h-12 w-full cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
