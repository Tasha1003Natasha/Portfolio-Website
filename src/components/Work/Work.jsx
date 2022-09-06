import React from 'react';
import Studio from '../../assets/studio.png';
import English from '../../assets/english.png';
import Filmoteka from '../../assets/filmoteka.png';

// const Work = () => {
//   return (
//     <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
//             Work
//           </p>
//           <p className="py-6"> Check out some of my recent work</p>
//         </div>

//         {/* Container */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${Studio})` }}
//             className="shadow-lg shadow-[#040c16] w-full group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${English})` }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${Filmoteka})` }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             // style={{ backgroundImage: `url(${realEstate})` }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* Grid Item */}
//           <div
//             // style={{ backgroundImage: `url(${WorkImg})` }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             // style={{ backgroundImage: `url(${realEstate})` }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//           >
//             {/* Hover Effects */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className="pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
//////////////////////////////////
const Work = () => {
  return (
    // <div name portfolio className="portfolio bg-[#0a192f]">
    //   <h2 className="text-center text-4xl">Work</h2>
    //   <h3 className="pt-6 text-center text-xl font-medium text-yellow-300">
    //     Check out some of my recent work
    //   </h3>
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-screen">
        <div className="pt-6">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-2"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="https://tasha1003natasha.github.io/Web-studio/"
            className="mx-auto transform rtansition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full shadow" src={Studio} alt="/" />
          </a>

          <a
            href="https://tasha1003natasha.github.io/HELLISH-ENGLISH/"
            className="mx-auto transform rtansition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full shadow" src={English} alt="/" />
          </a>

          <a
            href="https://tasha1003natasha.github.io/Filmoteka/"
            className="mx-auto transform rtansition-all hover:scale-105 md:mx-0"
          >
            <img className="w-full shadow" src={Filmoteka} alt="/" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
