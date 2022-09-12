import React from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';
import { ImBoxAdd } from 'react-icons/im';
import { useState } from 'react';
// import Logo from '../../assets/logo.png';
import MyPDF from '../../assets/Reisa_Nataliia.pdf';

import Toggle from '../Toggle/ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] md:h-[80px] text-xl font-semibold flex justify-between items-center px-4 bg-[#adbbc5]  text-[#fffd88] dark:bg-[#0d1c2c] dark:text-yellow-300">
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
      <ul className="hidden md:flex">
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
        className="md:hidden z-10 dark:hover:text-[#ccd6f6] hover:text-[#000080]"
      >
        {!nav ? <VscMenu /> : <VscChromeClose />}
      </div>

      {/*Mobile menu */}

      <ul
        onClick={handleClick}
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#adbbc5]  dark:bg-[#0d1c2c] flex flex-col justify-center items-center'
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

      {/* Socials icons */}

      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="text-xs md:text-xl w-[120px] h-[40px] ml-[-65px] md:w-[160px]  hover:ml-[-10px] md:h-[60px] md:ml-[-100px] md:hover:ml-[-10px] flex justify-between items-center durection-600 bg-blue-500 hover:bg-[#fffd88] dark:hover:bg-yellow-300">
            <a
              className="flex justify-between items-center w-full text-gray-400 dark:text-white"
              href="https://www.linkedin.com/in/tasha-natasha-0ba490245/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="text-xs md:text-xl w-[120px] h-[40px] ml-[-65px] md:w-[160px] md:h-[60px]  md:ml-[-100px] md:hover:ml-[-10px]  flex justify-between durection-600 items-center bg-[#000000] hover:bg-[#fffd88] dark:hover:bg-yellow-300">
            <a
              className="flex justify-between items-center w-full  text-gray-400 dark:text-white"
              href="https://github.com/Tasha1003Natasha?tab=repositories"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="text-xs md:text-xl w-[120px] h-[40px] ml-[-65px] md:w-[160px] md:h-[60px]  md:ml-[-100px] md:hover:ml-[-10px] flex justify-between durection-600 items-center bg-[#B80000] hover:bg-[#fffd88] dark:hover:bg-yellow-300">
            <a
              className="flex justify-between items-center w-full  text-gray-400 dark:text-white"
              href="/contact"
            >
              Email <TbMail size={30} />
            </a>
          </li>

          <li className="text-xs md:text-xl w-[120px] h-[40px] ml-[-65px] md:w-[160px] md:h-[60px]  md:ml-[-100px] md:hover:ml-[-10px]  flex justify-between items-center durection-600 bg-[#336633] hover:bg-[#fffd88] dark:hover:bg-yellow-300">
            <a
              className="flex justify-between items-center w-full text-gray-400 dark:text-white"
              href={MyPDF}
              download="Reisa_Nataliia.pdf"
            >
              Resume <ImBoxAdd size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
