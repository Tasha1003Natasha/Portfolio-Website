import React from 'react';
import Studio from '../assets/studio.png';
import English from '../assets/english.png';
import Filmoteka from '../assets/filmoteka.png';
import Kapusta from '../assets/kapusta.png';

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-gray-300"
    >
      <div className="lg:max-w-[800px] mx-auto px-6 pb-2 md:px-4 md:pb-4 flex flex-col md:justify-center w-full h-screen">
        <div className="mt-5 md:mx-10 lg:mx:0">
          <p className="text-base sm:text-2xl md:text-4xl font-bold inline border-b-4 text-[#000080] dark:text-gray-300 border-[#fffd88]  dark:border-yellow-300">
            Work
          </p>
          <p className="py-4"> Check out some of my recent work</p>
        </div>

        {/* Container */}

        <ul className="mx-auto grid grid-cols-2 gap-2 w-full pt-4 md:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <li>
            <a
              href="https://tasha1003natasha.github.io/Web-studio/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img className="w-full h-full shadow" src={Studio} alt="/" />
            </a>
          </li>

          <li>
            <a
              href="https://tasha1003natasha.github.io/HELLISH-ENGLISH/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img className="w-full h-full shadow" src={English} alt="/" />
            </a>
          </li>

          <li>
            <a
              href="https://tasha1003natasha.github.io/Filmoteka/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img className="w-full h-full shadow" src={Filmoteka} alt="/" />
            </a>
          </li>

          <li>
            <a
              href="https://comforting-chebakia-d21bbd.netlify.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img className="w-full h-full shadow" src={Kapusta} alt="/" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
