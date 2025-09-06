import dayjs from 'dayjs';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import { DatePicker } from '@/components/date-picker';
import { ComboboxDemo, TodoPriority } from '@/components/task-priority';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TodoFooter = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [priority, setPriority] = useState('');

  return (
    <div className='custom-container'>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='text-md mx-auto flex h-12 w-full max-w-75 cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
            <Plus className='!h-5 !w-5 shrink-0 text-white' />{' '}
            <span>Add Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <div className='flex items-center gap-2'>
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='sr-only'>
                Link
              </Label>
              <Input id='link' placeholder='Enter your task' />
            </div>
          </div>
          {/* <ComboboxDemo /> */}
          <div>
            <TodoPriority getPriority={setPriority} />
            <h1>
              {priority
                ? `Selected Priority: ${priority}`
                : 'No priority selected'}
            </h1>
          </div>
          {/* <TodoPriority getPriority={setPriority} />
          <h1>{priority}</h1> */}
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
          {/* check output date-picker */}
          <div className='text-foreground mt-4 text-xs'>
            Tanggal yang dipilih:{' '}
            {dayjs(selectedDate?.toString() || 'Belum dipilih').format()}
          </div>

          {/* end check output date-picker */}
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button className='text-md mx-auto flex h-12 w-full cursor-pointer rounded-[8px] bg-[#0c4bca] font-semibold dark:text-white'>
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TodoFooter;
