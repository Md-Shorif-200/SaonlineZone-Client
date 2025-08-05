import React from 'react';
import Lottie from 'lottie-react';
import { FaPlay } from 'react-icons/fa';

import banner_animation from '../../../public/Banner/service.json';

const Banner = () => {
  return (
    <div className="w-full min-h-screen max-h-[750px] bg-[#F8FAFC] px-6 md:px-12 md:flex items-center justify-between gap-8 py-10">
      {/* ---------- Banner Content ---------- */}
      <div className="w-full md:w-1/2 lg:w-[45%] text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Modern <span className="primary_text_color">Microservices</span> Architecture
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 mb-8">
          Build and scale applications <br className="hidden md:block" />
          with unmatched speed and flexibility.
        </p>

        {/* --------- Buttons --------- */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="primary_btn">
            Get Started
          </button>
          <button className="flex items-center gap-2 btn_outline">
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
