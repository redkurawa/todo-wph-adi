import { api } from './api';

const getTodoList = async () => {
  const r = await api.get('/todos');
  console.log('API response:', r.data.todos);
  return r.data;
};

export { getTodoList };
