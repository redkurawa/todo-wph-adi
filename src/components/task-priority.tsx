// // task-priority.tsx
// 'use client';

// import { Check, ChevronsUpDown } from 'lucide-react';
// import * as React from 'react';

// import { Button } from '@/components/ui/button';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   // CommandInput,
//   CommandItem,
//   CommandList,
// } from '@/components/ui/command';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';

// import { cn } from '@/lib/utils';

// const frameworks = [
//   {
//     value: 'HIGH',
//     label: 'High',
//   },
//   {
//     value: 'MEDIUM',
//     label: 'Medium',
//   },
//   {
//     value: 'LOW',
//     label: 'Low',
//   },
// ];

// type TodoPriorityProps = {
//   getPriority: (priority: string) => void;
// };

// export function TodoPriority({ getPriority }: TodoPriorityProps) {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState('');

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant='outline'
//           role='combobox'
//           aria-expanded={open}
//           className='text-md w-full justify-between border-neutral-200 font-normal text-gray-400'
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : 'Select priority'}
//           <ChevronsUpDown className='opacity-50' />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='w-full p-0'>
//         <Command>
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? '' : currentValue);
//                     getPriority(currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {framework.label}
//                   <Check
//                     className={cn(
//                       'ml-auto',
//                       value === framework.value ? 'opacity-100' : 'opacity-0'
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/lib/utils';

const priorities = [
  { value: 'HIGH', label: 'High' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'LOW', label: 'Low' },
];

type TodoPriorityProps = {
  getPriority: (priority: string) => void;
  defaultValue?: string;
};

export function TodoPriority({
  getPriority,
  defaultValue = '',
}: TodoPriorityProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  // Sync defaultValue when it changes (e.g. saat edit task)
  React.useEffect(() => {
    setValue(defaultValue);
    getPriority(defaultValue);
  }, [defaultValue, getPriority]);

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    setValue(newValue);
    getPriority(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='text-md w-full justify-between border-neutral-200 font-normal text-gray-800'
        >
          {value
            ? priorities.find((p) => p.value === value)?.label
            : 'Select priority'}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandList>
            <CommandEmpty>No priority found.</CommandEmpty>
            <CommandGroup>
              {priorities.map((p) => (
                <CommandItem
                  key={p.value}
                  value={p.value}
                  onSelect={handleSelect}
                >
                  {p.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === p.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
