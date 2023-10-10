import React from 'react';
import { ImBoxAdd } from 'react-icons/im';
import MyPDF from '../assets/Reisa_Nataliia.pdf';

const About = () => {
  return (
    <>
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
            <div className="text-base text-center sm:text-right md:text-4xl font-bold ">
              <p>
                Hi. I'm Tasha Natasha, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div className="text-center sm:text-left text-[15px] md:text-[18px]">
              <p>
                I'm an enthusiastic and detail-oriented Full Stack Developer
                seeking an entry-level position with Company to use my skills in
                coding, troubleshooting complex problems, and assisting in the
                timely completion of projects.
              </p>
              <div className="text-xs p-2 mt-10  md:text-xl w-[120px] h-[40px]  md:w-[160px] md:h-[60px]  md:ml-[-100px]   flex justify-between items-center durection-600 bg-[#000080] dark:bg-gray-400 hover:bg-[#fffd88] dark:hover:bg-yellow-300">
                <a
                  className="flex justify-between items-center w-full text-gray-400 dark:text-white"
                  href={MyPDF}
                  download="Reisa_Nataliia.pdf"
                >
                  Resume <ImBoxAdd size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
