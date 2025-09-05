// import { useState } from 'react';

//   export default SelectedButton =()=> {
//     const [activeTab, setActiveTab] = useState('today');
//   const tabs = [
//     { id: 'today', label: 'Today' },
//     { id: 'upcoming', label: 'Upcoming' },
//     { id: 'completed', label: 'Completed' },
//   ];

//   return (
//     <div className='flex w-full overflow-hidden rounded-2xl border border-neutral-300 text-sm'>
//       {tabs.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={`flex-1 border py-2 text-center ${
//             activeTab === tab.id
//               ? 'bg-blue-500 text-white'
//               : 'bg-white text-black'
//           }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }
// };

// export  SelectedButton;
