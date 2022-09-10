import React from 'react';
import Studio from '../../assets/studio.png';
import English from '../../assets/english.png';
import Filmoteka from '../../assets/filmoteka.png';
import Kapusta from '../../assets/kapusta.png';

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screenbg-[#adbbc5] bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-gray-300"
    >
      <div className="max-w-[800px] mx-auto p-6 flex flex-col justify-center w-full h-screen">
        <div className="pt-2">
          <p className="text-4xl font-bold inline border-b-4 text-[#000080] dark:text-gray-300 border-[#fffd88]  dark:border-yellow-300">
            Work
          </p>
          <p className="py-4"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-2 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="https://tasha1003natasha.github.io/Web-studio/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full h-full shadow" src={Studio} alt="/" />
          </a>
          <a
            href="https://tasha1003natasha.github.io/HELLISH-ENGLISH/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full h-full shadow" src={English} alt="/" />
          </a>

          <a
            href="https://tasha1003natasha.github.io/Filmoteka/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full h-full shadow" src={Filmoteka} alt="/" />
          </a>

          <a
            href="https://comforting-chebakia-d21bbd.netlify.app/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full h-full shadow" src={Kapusta} alt="/" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
