"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center py-3 md:py-6 px-5 md:px-20">
      {/* Navbar for small devices (mobile screens) */}
      <div className="md:hidden flex justify-between w-full items-center">
        <h1 className="font-bold text-2xl">New<span>Way</span></h1>
        {/* Hamburger/Cross icon */}
        <div className="flex items-center">
          {showMenu ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-blue-500 text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-blue-500 text-2xl cursor-pointer"
            />
          )}
        </div>
        {/* Dropdown menu */}
        {showMenu && (
          <div className="md:hidden absolute top-12 left-0 right-0 bg-white z-10 p-4 shadow-md space-y-2">
            <span className="block mb-3">About</span>
            <span className="block mb-3">Contact</span>
            <span className="block">Feedback</span>
            <span className="block text-blue-500">Sign In</span>
          </div>
        )}
      </div>

      {/* Navbar for medium/large devices (desktop screens) */}
      <div className="hidden md:flex justify-between items-center w-full space-x-6 font-semibold">
        <h1 className="font-bold text-3xl">New<span>Way</span></h1>
        {/* Navigation links */}
        <div className="flex space-x-6">
          <span>About</span>
          <span>Contact</span>
          <span>Feedback</span>
        </div>
        {/* Sign In button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
