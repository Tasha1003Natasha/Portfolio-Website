import React from 'react';
import Studio from '../assets/studio.png';
import English from '../assets/english.png';
import ProTest from '../assets/pro_test.png';
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

        <ul className="max-w-[300px] sm:max-w-full grid grid-cols-1  gap-1 sm:grid-cols-2  sm:gap-2  pt-4 md:w-3/4 md:gap-10 lg:w-full">
          {/* ........1... */}
          <div className="group relative w-full">
            <li className="w-full bg-white ">
              <img className="w-full h-full shadow" src={Studio} alt="/" />
              <div className="absolute inset-0 opacity-0 bg-white group-hover:opacity-100 transition-opacity text-[#000080] font-bold text-[6px] sm:text-[10px] lg:text-sm  p-2  lg:p-4 flex flex-col justify-center items-start   sm:space-y-2  transform scale-0 group-hover:scale-100">
                <div className="animate-slide-up">
                  <p>Role: Front end-developer.</p>
                  <p>
                    Individual project <span>[HTML, CSS, JavaScript].</span>
                  </p>
                </div>
                <div className="animate-slide-up">
                  <p>Developed section problems and benefits.</p>
                </div>
                <div className="animate-fade-in">
                  <a
                    href="https://tasha1003natasha.github.io/Web-studio/"
                    className="transform transition-all hover:scale-105 md:mx-0"
                  >
                    <span className="underline text-[#000080]">
                      Visit the Project Site
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </div>

          {/* ........2... */}

          <div className="group relative w-full">
            <li className="w-full bg-white ">
              <img className="w-full h-full shadow" src={English} alt="/" />
              <div className="absolute inset-0 opacity-0 bg-white group-hover:opacity-100 transition-opacity text-[#000080] font-bold text-[6px] sm:text-[10px] lg:text-sm  p-2  lg:p-4 flex flex-col justify-center items-start sm:space-y-2 transform scale-0 group-hover:scale-100">
                <div className="animate-slide-up">
                  <p>
                    Team project: An application for comprehensive preparation
                    for the external examination in English.
                    <span>[HTML, CSS, Parcel, SCSS, JavaScript].</span>
                  </p>
                </div>
                <div className="animate-slide-up">
                  <p>Developed section problems and benefits.</p>
                </div>
                <div className="animate-fade-in">
                  <a
                    href="https://tasha1003natasha.github.io/HELLISH-ENGLISH/"
                    className="transform transition-all hover:scale-105 md:mx-0"
                  >
                    <span className="underline text-[#000080]">
                      Visit the Project Site
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </div>
          {/* ........3... */}

          <div className="group relative w-full">
            <li className="w-full bg-white ">
              <img className="w-full h-full shadow" src={Kapusta} alt="/" />
              <div className="absolute inset-0 opacity-0 bg-white group-hover:opacity-100 transition-opacity text-[#000080] font-bold text-[6px] sm:text-[10px] lg:text-sm  p-2  lg:p-4 flex flex-col justify-center items-start sm:space-y-2  transform scale-0 group-hover:scale-100">
                <div className="animate-slide-up">
                  <p>
                    Team project: Application for home accounting.
                    <span>[HTML, CSS, JavaScript, React-Redux].</span>
                  </p>
                </div>
                <div className="animate-slide-up">
                  <p>Role: Front end-developer.</p>
                  <p>
                    Developed loader, header navigation, user menu, and page not
                    found.
                  </p>
                </div>
                <div className="animate-fade-in">
                  <a
                    href="https://react-project-kapusta.netlify.app/"
                    className="transform transition-all hover:scale-105 md:mx-0"
                  >
                    <span className="underline text-[#000080]">
                      Visit the Project Site
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </div>

          {/* ........4... */}

          <div className="group relative w-full">
            <li className="w-full h-full bg-[#0d1c2c] ">
              <img className="w-full h-full shadow" src={ProTest} alt="/" />
              <div className="absolute inset-0 opacity-0 bg-white group-hover:opacity-100 transition-opacity text-[#000080] font-bold  text-[6px] sm:text-[10px] lg:text-[12px]  p-2  lg:p-4 flex flex-col justify-center items-start sm:space-y-2  transform scale-0 group-hover:scale-100">
                <div className="animate-slide-up">
                  <p>
                    Team project: QA testing application.
                    <span>[HTML, CSS, JavaScript, React-Redux, Node.js].</span>
                  </p>
                </div>
                <div className="animate-slide-up">
                  <p>Role: Team Lead.</p>
                  <p>
                    Monitored the technical implementation of the project,
                    developed the outer wrapper of the entire project, dark
                    theme, fixing bugs. Initialized and connected the database
                    (MongoDB).
                  </p>
                </div>
                <div className="animate-fade-in">
                  <a
                    href="https://team-project-protest.netlify.app/auth"
                    className="transform transition-all hover:scale-105 md:mx-0"
                  >
                    <span className="underline text-[#000080]">
                      Visit the Project Site
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Work;
