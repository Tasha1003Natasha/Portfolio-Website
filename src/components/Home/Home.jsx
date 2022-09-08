import Work from 'components/Work/Work';
import Contact from 'components/Contact/Contact';
import Skills from 'components/Skills/Skills';
import About from 'components/About/About';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Me from '../../assets/me3.png';

/////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <>
      <div className="w-full h-full py-12  bg-gradient-to-l from-slate-900 to-amber-300  hover:bg-gradient-to-r">
        <div className="max-w-[1000px] mx-auto bg-[#0a192f] text-[#8892b0]">
          {/* <div className="flex flex-col md:flex-row items-center md:my-24"> */}
          <div className="flex flex-col md:flex-row items-center">
            <div className=" flex flex-col lg:w-1/2 justify-center items-start p-8">
              <p className=" text-gray-50 font-bold">Hi, my nickname is</p>
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                Tasha Natasha
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                I'm a Front-end Developer.
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                I am passionate about creating websites that improve the lives
                of those around me.
              </p>
              <div>
                <button className="text-[#0a192f] bg-[#ccd6f6]  group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </div>
            </div>

            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2  justify-center">
              <div className="h-full flex flex-wrap content-center">
                <div>
                  <img
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src={Me}
                    alt="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default Home;

/////////////////////////
