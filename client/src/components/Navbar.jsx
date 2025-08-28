import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import profile from "../assets/profile.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4">
        
        {/* Left Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={goHome}>
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Navbar Links (visible on tablet and above) */}
        <ul className="hidden sm:flex space-x-10 text-white">
          {["Home", "Play", "About", "Contact", "Leaderboard", "Login"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer sm:after:absolute sm:after:left-0 sm:after:-bottom-1 sm:after:h-[1.6px] sm:after:w-0 sm:after:bg-white sm:after:transition-all sm:after:duration-300 hover:sm:after:w-full"
              onClick={goHome}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Profile & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer" onClick={goHome}>
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Hamburger Menu (only visible on phones) */}
          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (visible only on phones when hamburger clicked) */}
      {isOpen && (
        <ul className="sm:hidden bg-gray-900 text-white flex flex-col space-y-4 px-6 py-4">
          {["Home", "Play", "About", "Contact", "Leaderboard", "Login"].map((item) => (
            <li
              key={item}
              className="cursor-pointer"
              onClick={goHome}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
