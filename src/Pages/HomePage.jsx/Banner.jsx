import React from "react";
import banner_img from "../../../public/Banner/banner.jpg";

const Banner = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-4 py-16 bg-black/15"
      style={{
        backgroundImage: `url(${banner_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
    
      }}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <h4 className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-white">
          Best Solution & Creative
        </h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold leading-tight">
          Grow Your Business Now
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white max-w-3xl mx-auto">
          Together we are going to help you determine a goal, choose your tools, and develop your business to make it distinct.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-6 w-full sm:w-auto">
          <button className="btn_outline uppercase w-full sm:w-auto">
            Get Started
          </button>
          <button className="primary_btn uppercase w-full sm:w-auto">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
