import { Outlet } from 'react-router-dom';
//Components
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
