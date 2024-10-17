import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="bg-gray-800 flex justify-between items-center text-white w-full text-2xl py-2 px-4 pl-16 font-serif">
        <h1 className="text-3xl">FindyourGitHub</h1>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:border-b-2">
   Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:border-b-2">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
