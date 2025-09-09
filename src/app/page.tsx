import ListPage from '@/components/list-page';
import ShowList from '@/components/show-list';

import TopMenu from './todo-header';

const Home = () => {
  return (
    <div className='custom-container px-2 sm:px-0'>
      <TopMenu />
      <ListPage />
      <ShowList />
    </div>
  );
};

export default Home;
