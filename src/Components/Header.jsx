import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-gray-800 flex justify-between items-center text-white w-full py-2 px-4 lg:px-16 font-serif">
        <h1 className="text-2xl lg:text-3xl">FindyourGitHub</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:space-x-8 text-lg hidden lg:block ${isOpen ? 'block' : 'hidden'} space-y-4 lg:space-y-0 mt-4 lg:mt-0`}>
          <li>
            <Link to="/" className="hover:border-b-2 block lg:inline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:border-b-2 block lg:inline">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
