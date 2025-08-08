import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

// nav logo
import nav_logo from '../../public/Nav-logo/Picsart_24-12-18_17-11-57-456.png';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // New state for scroll

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

     const navLinks = (
    <>
      <li className={`text-base mx-0 md:mx-4 my-4 md:my-0 font-semibold uppercase ${isScrolled ? 'text-gray-800' : 'text-black lg:text-white'}`}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={`text-base mx-0 md:mx-4 my-4 md:my-0 font-semibold uppercase ${isScrolled ? 'text-gray-800' : 'text-black lg:text-white'}`}>
        <NavLink to="/about-us">About us</NavLink>
      </li>
      <li className={`text-base mx-0 md:mx-4 my-4 md:my-0 font-semibold uppercase ${isScrolled ? 'text-gray-800' : 'text-black lg:text-white'}`}>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className={`text-base mx-0 md:mx-4 my-4 md:my-0 font-semibold uppercase ${isScrolled ? 'text-gray-800' : 'text-black lg:text-white'}`}>
        <NavLink to="/">Contact</NavLink>
      </li>
      <li className={`text-base mx-0 md:mx-4 my-4 md:my-0 font-semibold uppercase ${isScrolled ? 'text-gray-800' : 'text-black lg:text-white'}`}>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  

    const handleMenuIcon = () => setIsActive(true);
    const handleCloseIcon = () => setIsActive(false);

    return (
        <div className={`fixed  w-full top-0 z-50 transition-colors duration-300 common_spacing py-4 border-b border-gray-400 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between relative">

                {/* Logo - Left Side */}
                <div className="flex items-center">
                    <img src={nav_logo} alt="Logo" className="w-[60px] h-[60px]" />
                      <h2 className={`text-xl uppercase font-bold tracking-widest ${isScrolled ? 'text-cyan-500' : ' text-white '}`}>saonlinezone</h2>
                </div>

                {/* Right Side - nav links and button */}
                <div className="flex items-center gap-x-4">
                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center">
                        <ul className={`flex ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                            {navLinks}
                        </ul>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className={`lg:hidden text-4xl cursor-pointer ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                        <IoMenu onClick={handleMenuIcon} />
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div
                    tabIndex={0}
                    className={`h-[100vh] fixed left-0 top-0 transition-all duration-300 ease-in-out ${
                        isActive ? "w-full bg-black/30" : "w-0 overflow-hidden"
                    }`}
                    onClick={handleCloseIcon}
                >
                    <div
                        className={`h-full bg-white transition-all duration-500 ease-in-out ${
                            isActive ? "w-[80%]" : "w-0 overflow-hidden"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Sidebar Header */}
                        <div className="flex justify-between items-center pt-4 px-4 mb-6">
                            <div className="flex items-center gap-x-2">
                                <img src={nav_logo} alt="Logo" className="w-[60px] h-[60px]" />
                            </div>
                            <MdClose
                                className="text-5xl cursor-pointer"
                                onClick={handleCloseIcon}
                            />
                        </div>

                        {/* Sidebar Links */}
                        <ul className="flex flex-col px-4">
                            {navLinks}
                        </ul>
                        <div className="px-4">
                            <Link to="/contact">
                                <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded w-full mt-4">
                                    Contact Us
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