import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="lg:max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-center sm:text-right pb-8 md:pl-4">
            <p className="text-base md:text-4xl font-bold inline border-b-4 border-[#fffd88]  dark:border-yellow-300">
              About
            </p>
          </div>
        </div>
        <div className="md:max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 lg:px-4 px-14">
          <div className="text-base text-center sm:text-right md:text-4xl font-bold">
            <p>
              Hi. I'm Tasha Natasha, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="text-center sm:text-left text-[15px] md:text-[18px]">
            <p>
              I'm an enthusiastic and detail-oriented Frontend Developer seeking
              an entry-level position with Company to use my skills in coding,
              troubleshooting complex problems, and assisting in the timely
              completion of projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
