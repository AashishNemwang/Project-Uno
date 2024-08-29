// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">LOGO</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-8">
            <li>
              <Link
                to="/"
                className="block text-white text-lg px-2 py-1 hover:bg-blue-700 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white text-lg px-2 py-1 hover:bg-blue-700 rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-white text-lg px-2 py-1 hover:bg-blue-700 rounded"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white text-lg px-2 py-1 hover:bg-blue-700 rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-white text-lg px-2 py-1 hover:bg-blue-700 rounded border border-white"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block text-lg px-2 py-1 bg-white text-blue-600 hover:bg-gray-100 rounded"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
