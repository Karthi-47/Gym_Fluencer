import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 font-title" id="footer">
      <div className="container mx-auto text-center">
        <h1 className="text-red-600 font-bold text-2xl mb-4">GymFluencer</h1>
        <h2 className="font-bold mb-4">
          Where Fitness Meets Social Connection!!!
        </h2>
        <h3 className="font-bold mb-4">contact@gymfluencer.com</h3>
        <ul className="text-red-600 flex items-center justify-center space-x-6 mt-4 mb-4">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#home" className="hover:text-gray-400">
              Benefits
            </a>
          </li>
        </ul>
        <p className="mb-4">© 2024 Gymfluencer. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
