

import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";

// nav logo
import nav_logo from '../../public/Nav-logo/Picsart_24-12-18_17-11-57-456.png'




const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const navLink = <>
                            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium'>  <NavLink to="/">Home</NavLink> </li>
                            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium'>  <NavLink to="/about-us">About us</NavLink> </li>
                            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium'>  <NavLink>Blog</NavLink> </li>
                            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium'>  <NavLink>Contact</NavLink> </li>
                           
                      
            </>



  const handleMenuIcon = () => setIsActive(true);

  return (
    <div className="bg-base-100 shadow-sm sticky  top-0 z-50 common_spacing">
      <div className="flex items-center justify-between  py-3 relative">
        
          {/* Logo */}
          <div className=" nav-start flex items-center gap-x-2">
            <img src={nav_logo} alt="Logo" className="w-[60px] h-[60px]" />
            <h2 className="text-xl font-semibold">Saonline <span className="primary_text_color">Zone</span> </h2>
          </div>

                        {/* nav-links */}
            <div className="nav-center mr-10 hidden lg:flex ">
              <ul className="menu menu-horizontal px-1">
                    {navLink}
              </ul>
            </div>
        
       
      

        {/* User & Mobile */}
        <div className="flex items-center gap-x-4">
          <div className="lg:hidden text-4xl cursor-pointer">
            {!isActive && <IoMenu onClick={handleMenuIcon} />}
          </div>

          <div className="hidden lg:block">
             <Link to="dashboard">
                <button className="primary_btn uppercase">
                  <span>Dashboard</span>
                </button>
              </Link>
          
          </div>
        </div>

        {/* sm-md device Sidebar */}
        <div
          tabIndex={0}
          className={`h-[100vh] bg-black/30 absolute left-0 top-0 transition-all duration-300 ease-in-out ${
            isActive ? "w-full" : "w-0 overflow-hidden"
          }`}
          onClick={() => setIsActive(false)}
        >
          <div
            className={`h-full bg-white px-0 transition-all duration-500 ease-in-out ${
              isActive ? "w-[80%]" : "w-0 overflow-hidden"
            }`}
          >
            <div className="flex justify-between items-center pt-2 mb-6">
                {/* Sidebar Logo */}
          <div className="flex items-center gap-x-2">
            <img src={nav_logo} alt="Logo" className="w-[60px] h-[60px]" />
            {/* <h2 className="text-xl font-semibold">saonlinezone</h2> */}
          </div>
              <MdClose
                className="text-5xl pr-4 cursor-pointer"
                onClick={() => setIsActive(false)}
              />
            </div>

            <ul className="nav_link">
                    {navLink}
            </ul>
            <div className="divider"></div>

           <div className="">
                <Link to="signIn">
                  <button className="primary_btn uppercase">
                    <span>Log In / Sign Up</span>
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


























