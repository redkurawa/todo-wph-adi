// components/TadaCheckboxItem.tsx
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

import { TodoType } from '@/constants/todo-type';

// import { Tada } from '@/lib/getTodoList';

// type Props = {
//   tada: Tada;
//   onUpdate?: (updated: Tada) => void;
// };

type Props = {
  tada: TodoType;
  complete?: boolean;
  // onUpdate?: (updated: Tada) => void;
  // index: number;
};

export default function TodoCheckbox({ tada }: Props) {
  const [loading, setLoading] = useState(false);
  const [localTada, setLocalTada] = useState(tada);

  const handleToggle = async () => {
    setLoading(true);
    const updated = { ...localTada, completed: !localTada.completed };
    console.log('check.tsx update:', updated);

    try {
      await axios.put(`http://localhost:8080/todos/${updated.id}`, updated);
      setLocalTada(updated);
      // onUpdate?.(updated);
    } catch (err) {
      console.error('Gagal update tada:', err);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        checked={localTada.completed}
        onCheckedChange={handleToggle}
        disabled={loading}
      />
      {/* <span
        className={
          localTada.completed ? 'text-muted-foreground line-through' : ''
        }
      >
        {localTada.title}
      </span> */}
      {loading && (
        <Loader2 className='text-muted-foreground h-4 w-4 animate-spin' />
      )}
    </div>
  );
}
