'use client';

import dayjs from 'dayjs';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
      toast('Task Added!', {
        style: {
          background: '#22c55e',
          color: 'white',
        },
      });
      console.log('Server response2:', response.data);
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

////////////////////////
// 'use client';

// import dayjs from 'dayjs';
// import { Plus } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'sonner';

// import { DatePicker } from '@/components/date-picker';
// import { TodoPriority } from '@/components/task-priority';
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';

// import { api } from '@/services/api';

// type TodoFormDialogProps = {
//   todoId?: string;
//   triggerLabel?: string;
// };

// export default function TodoFormDialog({
//   todoId,
//   triggerLabel = 'Add Task',
// }: TodoFormDialogProps) {
//   const [open, setOpen] = useState(false);
//   const { register, handleSubmit, reset, setValue, getValues } = useForm();
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(
//     new Date()
//   );
//   const [priority, setPriority] = useState('MEDIUM');

//   // Load existing todo if editing
//   useEffect(() => {
//     if (todoId && open) {
//       (async () => {
//         try {
//           const { data } = await api.get(`/todos/${todoId}`);
//           setValue('title', data.title);
//           setPriority(data.priority);
//           setSelectedDate(new Date(data.date));
//         } catch (error) {
//           console.error('Failed to fetch todo:', error);
//         }
//       })();
//     }
//   }, [todoId, open, setValue]);

//   const onSubmit = async (formData: any) => {
//     const payload = {
//       title: formData.title,
//       completed: false,
//       date: dayjs(selectedDate).toISOString(),
//       priority,
//     };

//     try {
//       if (todoId) {
//         await api.put(`/todos/${todoId}`, payload);
//         toast('Task Updated!', {
//           style: { background: '#0ea5e9', color: 'white' },
//         });
//       } else {
//         await api.post('/todos', payload);
//         toast('Task Added!', {
//           style: { background: '#22c55e', color: 'white' },
//         });
//       }
//       window.location.reload();
//     } catch (error) {
//       console.error('Failed to submit:', error);
//     }

//     setOpen(false);
//     reset();
//     setPriority('MEDIUM');
//     setSelectedDate(new Date());
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className='text-md mx-auto flex h-12 w-full max-w-75 cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
//           <Plus className='!h-5 !w-5 shrink-0 text-white' />
//           <span>{triggerLabel}</span>
//         </Button>
//       </DialogTrigger>
//       <DialogContent className='sm:max-w-md'>
//         <DialogHeader>
//           <DialogTitle className='text-display-xs font-bold'>
//             {todoId ? 'Edit Task' : 'Add Task'}
//           </DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
//           <Input
//             id='title'
//             {...register('title', { required: true })}
//             placeholder='Enter your task'
//           />
//           <TodoPriority getPriority={setPriority} defaultValue={priority} />
//           <DatePicker date={selectedDate} setDate={setSelectedDate} />
//           <DialogFooter>
//             <Button className='text-md mx-auto flex h-12 w-full cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
//               Save
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
