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
    <div className="w-full h-[80px] text-xl font-semibold  flex justify-between items-center px-4 bg-[#adbbc5]  text-[#fffd88] dark:bg-[#0d1c2c] dark:text-yellow-300">
      <div>
        <h1>
          <a
            className="text-3xl p-5 text-[#fffd88] dark:text-yellow-300"
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
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <VscMenu /> : <VscChromeClose />}
      </div>

      {/*Mobile menu */}

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link to="/">Home</Link>
        </li>

        <li className="py-6 text-4xl">
          <Link to="/about">About</Link>
        </li>

        <li className="py-6 text-4xl">
          <Link to="/about">Skills</Link>
        </li>

        <li className="py-6 text-4xl">
          <Link to="/work">Work</Link>
        </li>

        <li className="py-6 text-4xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Socials icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durection-600 bg-blue-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tasha-natasha-0ba490245/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durection-600 bg-[#000000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Tasha1003Natasha?tab=repositories"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durection-600 bg-[#B80000] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/contact"
            >
              Email <TbMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durection-600 bg-[#336633] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
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
