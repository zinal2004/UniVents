import React, { useState } from 'react';
import { FaHome, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md bg-gray-800 shadow-lg z-50 px-6 py-4 flex justify-between items-center"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-extrabold text-yellow-400">UniVents</h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition">
            <FaHome /> <span>Home</span>
          </a>

          {/* Events Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition">
              <span>Events</span> <FaChevronDown />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white p-3 rounded shadow-lg mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Workshops</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Hackathons</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Seminars</a>
            </div>
          </div>

          {/* User Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button className="flex items-center space-x-2">
              <CgProfile className="text-4xl cursor-pointer hover:text-yellow-400 transition" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Create Event</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600 rounded">Logout</a>
              </div>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
