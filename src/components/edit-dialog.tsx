// edit-dialog.tsx

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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

import { TodoType } from '@/constants/todo-type';
import { api } from '@/services/api';

import { DatePicker } from './date-picker';
import { TodoPriority } from './task-priority';

type Props = {
  todo: TodoType;
  onClose: () => void;
};

const EditDialog = ({ todo, onClose }: Props) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [priority, setPriority] = useState('MEDIUM');

  useEffect(() => {}, [todo.id]);

  useEffect(() => {
    if (!todo.id) return;

    setValue('title', todo.title);
    setPriority(todo.priority);
    setSelectedDate(new Date(todo.date));
  }, [todo.id, setValue]);

  const onSubmit = async (formData: any) => {
    const payload = {
      title: formData.title,
      completed: false,
      date: dayjs(selectedDate).toISOString(),
      priority,
    };

    try {
      if (todo.id) {
        await api.put(`/todos/${todo.id}`, payload);
        toast('Task Updated!', {
          style: { background: '#0ea5e9', color: 'white' },
        });
      } else {
        await api.post('/todos', payload);
        toast('Task Added!', {
          style: { background: '#22c55e', color: 'white' },
        });
      }
      window.location.reload();
    } catch (error) {
      console.error('Failed to submit:', error);
    }

    setOpen(false);
    reset();
    setPriority('MEDIUM');
    setSelectedDate(new Date());
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogDescription></DialogDescription>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-display-xs font-bold'>
            Edit Task
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-2'>
            <Input
              id='title'
              {...register('title', { required: true })}
              placeholder='Enter your task'
            />
          </div>

          <TodoPriority
            getPriority={setPriority}
            defaultValue={todo.priority}
          />
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
};

export default EditDialog;
