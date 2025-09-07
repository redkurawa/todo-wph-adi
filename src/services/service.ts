import { api } from './api';

// const getTodoList = async () => {
//   const r = await api.get('/todos');
//   console.log('API response:', r.data.todos);
//   return r.data;
// };

const getTodoList = async (todoParam: string = '') => {
  try {
    const endpoint = todoParam.length === 0 ? '/todos' : `/todos/${todoParam}`;
    const response = await api.get(endpoint);
    console.log('API response:', response.data.todos);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export { getTodoList };
