import React from "react";
import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-500 hover:text-blue-400 transition duration-300"
        >
          <FaFilm />
          MovieLand
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/favourites"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;