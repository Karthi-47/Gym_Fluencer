import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-600 text-white z-50 px-6 p-3 sticky top-5 rounded-3xl mx-auto w-full max-w-5xl">
      <div className="container mx-auto flex justify-between items-center font-title">
        <h1 className="text-xl font-bold text-red-600">Gymfluencer</h1>
        <ul className="flex space-x-6 py-2">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-gray-400">
              Benefits
            </a>
          </li>
          <li>
            <a href="#blogs" className="hover:text-gray-400">
              Blogs
            </a>
          </li>
          <li>
            <button className="bg-red-500 text-white px-4  rounded-3xl">
              Join Us Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
