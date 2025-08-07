import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaBoxOpen, FaSearchDollar, FaPooStorm } from 'react-icons/fa';

const userMenuLinks = [
  {
    name: 'Find Job',
    path: '/dashboard/Find-Job',
    icon: <FaSearchDollar className="text-lg" />,
  },
   {
    name: 'Post New Job',
    path: '/dashboard/Post-Job',
    icon: <FaPooStorm className="text-lg" />,
  },
  {
    name: 'Home',
    path: '/',
    icon: <FaHome className="text-lg" />,
    customStyle: 'bg-indigo-600 text-white',
    hoverStyle: 'hover:bg-indigo-100',
  },
];

const UserMenu = () => {
  return (
    <div className="w-70 md:w-60 lg:w-75 primary_bg_color min-h-screen  p-4">
      <ul className="bg-base-200 shadow-sm rounded-xl min-h-full w-full md:w-50 lg:w-60 p-4 space-y-2 h-1/2 text-base-content">

        <li className="text-xl text-center font-bold primary_text_color mb-6">User Panel</li>

        {userMenuLinks.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="divider"></div>;
          }

          const isHome = item.name === 'Home';

          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md transition duration-200 ${
                    isActive
                      ? isHome
                        ? 'bg-indigo-600 text-white'
                        : 'primary_bg_color text-white'
                      : isHome
                      ? 'text-gray-700 hover:bg-indigo-100'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserMenu;
