import { Pencil, Trash2 } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { api } from '@/services/api';

type Props = {
  id: string;
  className?: string;
  onDeleted?: () => void;
};

export function EditDelete({ id, onDeleted }: Props) {
  const handleDelete = async () => {
    try {
      const response = await api.delete(`/todos/${id}`);
      console.log('Server response:', response.data);
      if (onDeleted) onDeleted();
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
      <DialogTrigger asChild>
        <div className='cursor-pointer text-4xl'>...</div>
      </DialogTrigger>
      <DialogContent className='w-35'>
        <DialogClose asChild>
          <div>
            <div className={`flex cursor-pointer items-center gap-2`}>
              <Pencil size={16} />
              Edit
            </div>
            <div
              onClick={handleDelete}
              className={`flex cursor-pointer items-center gap-2 text-red-500`}
            >
              <Trash2 size={16} />
              Delete
            </div>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
