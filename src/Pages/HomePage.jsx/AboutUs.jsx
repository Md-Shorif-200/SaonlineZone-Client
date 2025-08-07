import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import img_1 from "../../../public/About-us/01_about.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-8 px-4 mt-12 md:mt-10 lg:mt-14">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row  gap-12 lg:gap-28">

            {/* Image Section */}
        <div className="relative w-full ">
          {/* Top Image */}
          <img
            src={img_1}
            alt="About Us"
            className="w-full h-[300px] object-cover absolute top-2 left-4 sm:left-6 z-20 rounded-md shadow-md"
          />

          {/* Background Card - Gray */}
          <div className="w-full h-[300px] bg-[#F1F1F1] absolute top-6 left-2 sm:left-4 z-10 rounded-md"></div>

          {/* Background Card - Blue */}
          <div className="w-full h-[300px] bg-blue-500 absolute top-12 left-0 z-0 rounded-md"></div>
        </div>

        {/* Content Section */}
        <div className="w-full space-y-5 text-center md:text-left px-2 sm:px-4">
          <h4 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-600">
            Who We Are
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            PROVIDE AWESOME AND BEST BUSINESS SOLUTIONS
          </h2>
          <p className="text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-orange-500 font-semibold uppercase text-sm sm:text-base transition-colors duration-300"
          >
            <BsBoxArrowInUpRight className="text-base sm:text-lg" />
            Read More
          </a>
        </div>

    

      </div>
    </div>
  );
};

export default AboutUs;
