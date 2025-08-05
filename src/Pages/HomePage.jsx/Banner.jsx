import React from 'react';
import Lottie from 'lottie-react';
import { FaPlay } from 'react-icons/fa';

import banner_animation from '../../../public/Banner/service.json';

const Banner = () => {
  return (
    <div className="w-full min-h-screen max-h-[750px] px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 bg-white">
      {/* ---------- Banner Content ---------- */}
      <div className="w-full md:w-1/2 lg:w-[45%] text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Modern <span className="text-indigo-600">Microservices</span> Architecture
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 mb-8">
          Build and scale applications <br className="hidden md:block" />
          with unmatched speed and flexibility.
        </p>

        {/* --------- Buttons --------- */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-medium shadow">
            Get Started
          </button>
          <button className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition duration-300 font-medium">
            <FaPlay className="text-sm" />
            Watch Video
          </button>
        </div>
      </div>

      {/* ---------- Banner Animation ---------- */}
      <div className="w-full md:w-1/2 lg:w-[55%] flex justify-center">
        <div className="w-[80%] max-w-md">
          <Lottie animationData={banner_animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
