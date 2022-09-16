import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Sass from '../assets/sass.png';

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-gray-300"
    >
      {/* Container */}
      <div className="lg:max-w-[1000px] mx-auto px-10 pb-2 sm:px-4 sm:pb-4 flex flex-col justify-center w-full h-full">
        <div className="px-2 sm:px-10">
          <p className="text-base sm:text-2xl md:text-4xl font-bold inline border-b-4 border-[#fffd88]  dark:border-yellow-300 ">
            Skills
          </p>
          <p className="text-sm sm:text-base md:text-xl py-2 sm:py-4">
            My technical skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:py-8 py-2 px-2 sm:px-10 lg:px-0">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 sm:w-20  mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-2 md:my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 sm:w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-2 sm:my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 sm:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-2 sm:my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 sm:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-2 sm:my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 sm:w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-2 sm:my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 sm:w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-2 sm:my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 sm:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-2 sm:my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 sm:w-20 mx-auto" src={Sass} alt="HTML icon" />
            <p className="my-2 sm:my-4">Sass</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
