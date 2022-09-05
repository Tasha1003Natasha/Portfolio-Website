import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my nickname is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tasha Natasha
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I have been coding for 5 months and during this time I have done 3
          successful team projects and 2 individual ones. Due to this I am good
          at core technical skills, organizational ethics and discipline.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
