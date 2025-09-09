import { api } from './api';

const getTodoList = async (todoParam: string = '', queryDate: string = '') => {
  try {
    let endpoint = '/todos';

    if (todoParam.length > 0) {
      endpoint = `/todos/${todoParam}`;
    } else if (queryDate.length > 0) {
      endpoint = `/todos?${queryDate}`;
    }

    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export { getTodoList };
