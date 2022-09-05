// import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
