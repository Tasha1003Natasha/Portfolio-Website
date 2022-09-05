import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import Me from '../../assets/me.png';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[800px] mx-auto px-8  flex flex-col justify-center h-full">
        <p className="text-[#ffc0cb]  font-bold">Hi, my nickname is</p>
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
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

/////////////////////////////////////////////////////////////////

/* <div>
<img src={Me} alt="logo" style={{ width: '200px' }} />
</div> */

// const Home = () => {
//   return (
//     <div>
//       <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//         <div className="sm:text-center lg:text-left">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//             <span className="block xl:inline">Data to enrich your</span>
//             <span className="block text-indigo-600 xl:inline">
//               online business
//             </span>
//           </h1>
//           <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//             lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//             fugiat aliqua.
//           </p>
//           <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//             <div className="rounded-md shadow">
//               <a
//                 href="/"
//                 className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
//               >
//                 Get started
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>

//       <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//         <img
//           className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
//           src={Me}
//           style={{ width: '400px' }}
//           alt="/"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
