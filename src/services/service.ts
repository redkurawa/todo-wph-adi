import { api } from './api';

const getTodoList = async (todoParam: string = '', queryDate: string = '') => {
  try {
    // let endpoint = todoParam.length === 0 ? '/todos' : `/todos/${todoParam}`;
    // endpoint = todoParam.length === 0 ? '/todos' : `/todos?${queryDate}`;

    let endpoint = '/todos';

    if (todoParam.length > 0) {
      endpoint = `/todos/${todoParam}`;
    } else if (queryDate.length > 0) {
      endpoint = `/todos?${queryDate}`;
    }

    const response = await api.get(endpoint);
    // console.log('endpoint service.ts :', endpoint);
    // console.log('API response:', response.data.todos);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export { getTodoList };
