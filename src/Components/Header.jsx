import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  }

  return (
    <nav
      className={`bg-gray-900 text-white shadow-md sticky top-0 z-10 transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gray-900" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center px-6 py-4">
        <Link to="/" className="text-2xl lg:text-3xl font-bold flex items-center mr-auto">
          <img
            src="https://cdn.icon-icons.com/icons2/800/PNG/512/_github_icon-icons.com_65799.png"
            alt="GitHub Logo"
            className="w-8 h-8 mr-2"
          />
          GitHubExplorer
        </Link>

        <ul
          className={`lg:flex lg:space-x-8 text-lg flex justify-center items-center absolute lg:relative bg-gray-900 w-full lg:w-auto top-16 left-0 lg:top-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`block px-6 py-3 lg:p-0 hover:text-blue-400 transition-all duration-300 ${
                location.pathname === "/" ? "text-blue-400" : ""
              }`}
            >
              <FaHome className="inline-block mr-2" /> 
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block px-6 py-3 lg:p-0 hover:text-red-400 transition-all duration-300 ${
                location.pathname === "/about" ? "text-red-400" : ""
              }`}
            >
              <FaInfoCircle className="inline-block mr-2" /> 
            </Link>
          </li>
        </ul>

        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <button
          onClick={toggleDarkMode}
          className="lg:block bg-gray-800 text-white p-2 rounded-full transition-all duration-300 focus:outline-none hover:bg-gray-700 ml-4"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
