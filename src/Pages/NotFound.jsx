import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-l from-white to-[#adbbc5] hover:bg-gradient-to-r  dark:from-white dark:to-[#0d1c2c]">
      <Link to="/">
        <p className='mx-4 lg:mb-4  text-center text-sm sm:text-base md:text-base lg:text-2xl text-gray-50 mb:mb-4"'>
          Opsss! This page doesn't exist 🤨
        </p>

        <button
          className="text-sm md:text-lg lg:px-4 lg:py-2 lg:my-4 my-2 px-2 py-2 text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-[#fffd88] hover:border-bg-[#fffd88] dark:hover:bg-yellow-300 dark:hover:border-yellow-300  mx-auto flex items-center"
          type="button"
        >
          Open home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
