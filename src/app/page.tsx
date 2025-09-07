import TopMenu from './top-menu';
import ListPage from '../components/list-page';

const Home = () => {
  return (
    <div className='custom-container px-2 sm:px-0'>
      <TopMenu />
      <ListPage />
    </div>
  );
};

export default Home;
