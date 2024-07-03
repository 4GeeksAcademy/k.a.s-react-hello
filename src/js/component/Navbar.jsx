import React from 'react';


export function Navbar () {
    return  (
        <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="flex items-center">

            <span className="font-bold text-lg">My Website</span>
          </div>
          <div className="flex space-x-2">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  };