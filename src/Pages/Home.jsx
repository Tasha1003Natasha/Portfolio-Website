import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Me from '../assets/me.png';
import SocialsIcons from 'components/Navbar/SocialsIcons';

const Home = () => {
  return (
    <>
      <div className="w-full h-screen px-12 py-4 sm:py-20 md:px-20  bg-gradient-to-l from-white to-[#adbbc5] hover:bg-gradient-to-r  dark:from-white dark:to-[#0d1c2c]">
        <div className="lg:max-w-[1200px]  mx-auto bg-[#adbbc5] text-[#000080]  dark:bg-[#0d1c2c] dark:text-[#8892b0]">
          <div className="pt-2 lg:pt-0 flex flex-col md:flex-row md:items-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-50 font-bold lg:text-2xl">
                Hi, my nickname is
              </p>

              <h1 className="text-xl sm:text-3xl lg:text-5xl p-2 text-[#fffd88] dark:text-yellow-300 tracking-loose">
                Tasha Natasha
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-4xl leading-relaxed md:leading-snug mb-2 text-[#000080]  dark:text-[#ccd6f6]">
                I'm a Frontend Developer.
              </h2>
              <p className="mx-4 lg:mb-4  text-center text-sm sm:text-base md:text-base lg:text-2xl text-gray-50 mb:mb-4">
                I am passionate about creating websites that improve the lives
                of those around me.
              </p>
              <div>
                <button className="text-[#0a192f] bg-[#ccd6f6] text-sm md:text-base lg:text-xl group border-2 px-3 py-2 md:px-4  my-2 flex items-center hover:bg-[#fffd88] hover:border-bg-[#fffd88] dark:hover:bg-yellow-300 dark:hover:border-yellow-300">
                  <a href="/work">View Work</a>
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end">
              <img
                className="h-48 md:h-full inline-block mt-0 p-0"
                src={Me}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>

      <SocialsIcons />
    </>
  );
};

export default Home;
