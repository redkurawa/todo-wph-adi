// edit - delete -dialog.tsx;
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { TodoType } from '@/constants/todo-type';
import { api } from '@/services/api';

import EditDialog from './edit-dialog';

type Props = {
  todo: TodoType;
  className?: string;
  onDeleted?: () => void;
};

export function EditDelete2({ todo, onDeleted }: Props) {
  const [showEditDialog, setShowEditDialog] = useState(false);

  const updated = { ...todo };
  console.log('editdelte isi update :', updated);

  const handleOpenEdit = () => {
    setShowEditDialog(true);
  };

  const handleCloseEdit = () => {
    setShowEditDialog(false);
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/todos/${updated.id}`);
      console.log('Server response:', response.data);
      if (onDeleted) onDeleted();
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <DialogTrigger asChild>
          <div className='cursor-pointer text-4xl'>...</div>
        </DialogTrigger>
        <DialogContent className='w-35'>
          <DialogClose asChild>
            <div>
              <div
                onClick={handleOpenEdit}
                className={`flex cursor-pointer items-center gap-2`}
              >
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
      {showEditDialog && <EditDialog todo={todo} onClose={handleCloseEdit} />}
    </>
  );
}
