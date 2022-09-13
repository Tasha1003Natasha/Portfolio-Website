import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';
import { ImBoxAdd } from 'react-icons/im';
import MyPDF from '../../assets/Reisa_Nataliia.pdf';

const SocialsIcons = () => {
  return (
    <div className="flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="text-xs md:text-xl w-[120px] h-[40px] ml-[-65px] md:w-[160px] md:h-[60px] md:ml-[-100px] md:hover:ml-[-10px] flex justify-between items-center durection-600 bg-blue-500 hover:bg-[#fffd88] dark:hover:bg-yellow-300">
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
  );
};

export default SocialsIcons;
