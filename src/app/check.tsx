'use client';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

type Tada = {
  id: string;
  title: string;
  completed: boolean;
  date: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

export default function TadaCheckbox() {
  const [tada, setTada] = useState<Tada | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/todos?page=1&limit=1&order=asc')
      .then((res) => {
        setTada(res.data.todos[0]); // ganti ke tada
      })
      .catch((err) => console.error('Gagal mengambil data tada:', err));
  }, []);

  const handleToggle = async () => {
    if (!tada) return;
    setLoading(true);

    const updatedTada = {
      ...tada,
      completed: !tada.completed,
    };

    try {
      await axios.put(`http://localhost:8080/todos/${tada.id}`, updatedTada);
      setTada(updatedTada);
    } catch (err) {
      console.error('Gagal mengupdate tada:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!tada) return <div>Memuat tada...</div>;

  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        checked={tada.completed}
        onCheckedChange={handleToggle}
        disabled={loading}
      />
      <span
        className={tada.completed ? 'text-muted-foreground line-through' : ''}
      >
        {tada.title}
      </span>
      {loading && (
        <Loader2 className='text-muted-foreground h-4 w-4 animate-spin' />
      )}
    </div>
  );
}
