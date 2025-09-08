import ListPage from '@/components/list-page';

import TopMenu from './top-menu';

const Home = () => {
  return (
    <div className='custom-container px-2 sm:px-0'>
      <TopMenu />
      <ListPage />
      {/* <TadaCheckbox /> */}
    </div>
  );
};

export default Home;
