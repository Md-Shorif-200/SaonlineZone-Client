import React from "react";
import { Outlet } from "react-router-dom";
import { usePostJob } from "../../../Context/PostJobProvider";

const PostJob = () => {
  const { activeLine1, activeLine2, activeLine3 } = usePostJob(false); // Collect data from the context api

  return (
    <div>
      <div className="post_job_section p-10">
        <div className="p-12 max-w-6xl mx-auto bg-white shadow-sm border border-gray-200">
          {/* ------------------ job progess bar ------------*/}
          <div className="w-[95%] post_job_progress flex mx-auto px-4">
            {/* ------- location */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div className="w-12 h-12 bg-blue-500 rounded-full text-white font-semibold text-2xl flex justify-center items-center z-10 relative">
                  1
                </div>
                <p>Location</p>
              </div>
                {/*line 1 */}
              <div
                className={`line_1 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine1 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ category */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-12 h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine1
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  2
                </div>
                <p>Select Category</p>
              </div>
                        {/* line 2 */}
              <div
                className={`line_2 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine2 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ Job Information */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-12 h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine2
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  3
                </div>
                <p>Job Information</p>
              </div>
                    {/* line 3 */}
              <div
                className={`line_3 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine3 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ Budget & Setting */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-12 h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine3
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  4
                </div>
                <p>Budget & Setting</p>
              </div>
            </div>
          </div>

          {/* render dynamic content */}

          <div>
            <Outlet></Outlet>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PostJob;
