import React from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { TbMail } from 'react-icons/tb';
// import { ImBoxAdd } from 'react-icons/im';
// import MyPDF from '../../assets/Reisa_Nataliia.pdf';
import { useState } from 'react';
// import Logo from '../../assets/logo.png';
import Toggle from '../Toggle/ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] md:h-[80px] text-base md:text-xl font-semibold flex justify-between items-center px-4 bg-[#adbbc5]  text-[#fffd88] dark:bg-[#0d1c2c] dark:text-yellow-300">
      <div>
        <h1>
          <a
            className="lg:text-3xl  p-5 text-[#fffd88] dark:text-yellow-300 "
            href="/"
          >
            TN
          </a>
        </h1>
        {/* <img src={Logo} alt="logo" style={{ width: '200px' }} /> */}
      </div>
      <Toggle />

      {/* menu */}
      <ul className="hidden sm:flex">
        <li className="dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/">Home</Link>
        </li>

        <li className="dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/about">About</Link>
        </li>

        <li className="dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/skills ">Skills</Link>
        </li>

        <li className="dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/work">Work</Link>
        </li>

        <li className="dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="sm:hidden z-10 dark:hover:text-[#ccd6f6] hover:text-[#000080]"
      >
        {!nav ? <VscMenu /> : <VscChromeClose />}
      </div>

      {/* Mobile menu */}

      <ul
        onClick={handleClick}
        className={
          !nav
            ? 'hidden'
            : 'sm:hidden absolute top-0 left-0 w-full h-screen  bg-[#adbbc5]  dark:bg-[#0d1c2c] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/">Home</Link>
        </li>

        <li className="py-6 text-4xl dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/about">About</Link>
        </li>

        <li className="py-6 text-4xl dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/skills">Skills</Link>
        </li>

        <li className="py-6 text-4xl dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/work">Work</Link>
        </li>

        <li className="py-6 text-4xl dark:hover:text-[#ccd6f6] hover:text-[#000080]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
