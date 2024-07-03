import React from 'react';

export function CardRow ({children}) {
    return (
        
        <div className=" grid grid-cols-4 gap-2 text-center items-stretch">
          {/* Card 1 */}
          <div className="bg-white m-6 rounded border-solid border-2">
          <img src="https://via.placeholder.com/500x325" alt="" class="w-full object-cover object-center"/>
            <h2 className="text-xl font-bold py-2">Card 1</h2>
            <p className="text-gray-700 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className= "p-4 border-t-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Call to Action!
              </button> 
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white m-6 rounded border-solid border-2">
          <img src="https://via.placeholder.com/500x325" alt="" class="w-full object-cover object-center"/>
            <h2 className="text-xl font-bold py-2">Card 1</h2>
            <p className="text-gray-700 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className= "p-4 border-t-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Call to Action!
              </button> 
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white m-6 rounded border-solid border-2">
          <img src="https://via.placeholder.com/500x325" alt="" class="w-full object-cover object-center"/>
            <h2 className="text-xl font-bold py-2">Card 1</h2>
            <p className="text-gray-700 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className= "p-4 border-t-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Call to Action!
              </button> 
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white m-6 rounded border-solid border-2">
          <img src="https://via.placeholder.com/500x325" alt="" class="w-full object-cover object-center"/>
            <h2 className="text-xl font-bold py-2">Card 1</h2>
            <p className="text-gray-700 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className= "p-4 border-t-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Call to Action!
              </button> 
            </div>
          </div>
        </div>

    );
  };