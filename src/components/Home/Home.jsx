import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Me from '../../assets/me.png';

// const Home = () => {
//   return (
//     <div name="home" className="w-full h-screen bg-[#0a192f]">
//       {/* Container */}
//       <div className="max-w-[800px] mx-auto px-8  flex flex-col justify-center h-full">
//         <p className="text-[#ffc0cb]  font-bold">Hi, my nickname is</p>
//         <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
//           Tasha Natasha
//         </h1>
//         <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
//           I'm a Front-end Developer.
//         </h2>
//         <p className="text-[#8892b0] py-4 max-w-[700px]">
//           I have been coding for 5 months and during this time I have done 3
//           successful team projects and 2 individual ones. Due to this I am good
//           at core technical skills, organizational ethics and discipline.
//         </p>

//         <div>
//           <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
//             View Work
//             <span className="group-hover:rotate-90 duration-300">
//               <HiArrowNarrowRight className="ml-3" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

/////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <section>
      <div className="bg-[#0a192f] text-[#8892b0]  py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="max-w-[1000px] flex flex-col lg:w-1/2 justify-center items-start p-8">
            <p className="text-[#ffc0cb]  font-bold">Hi, my nickname is</p>
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Tasha Natasha
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              I'm a Front-end Developer.
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              I have been coding for 5 months and during this time I have done 3
              successful team projects and 2 individual ones. Due to this I am
              good at core technical skills, organizational ethics and
              discipline.
            </p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </div>
          </div>

          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2  justify-center">
            <div class="h-48 flex flex-wrap content-center">
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
    </section>
  );
};

export default Home;
