import React from 'react';

export function Jumbotron () {
            return    (
    <div className="bg-gray-200 p-8">
      <div className="max-w-4xl px-4 border-solid border-2">
        <h1 className="text-6xl font-semi mb-4">A Warm Welcome!</h1>
        <p className="text-gray-700 text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className= "pb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Call to Action!
          </button>
        </div>
      </div>
    </div>
  );
};