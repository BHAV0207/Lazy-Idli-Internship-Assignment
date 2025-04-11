import { ChevronRight } from 'lucide-react';
import React from 'react';

function PlayItCool() {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/whitediamond.png'), linear-gradient(to right, #e0f7fa, #ffffff)",
      }}
    >
      <div className=" backdrop-blur-md rounded-xl max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-7xl font-extrabold text-black mb-4">Play it <br />cool</h2>
            <p className="text-lg text-blue-800 mb-8">We call this our Royalty Programme.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              Become a member
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-8">
            <div>
              <img src="https://playarena.in/wp-content/uploads/2024/05/Skip-the-Queue.svg" alt="" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">SKIP THE QUEUE</h3>
              <p className="text-blue-800">No ticketing. Just load your card and go play.</p>
            </div>
            <div className='mt-20'> 
              <img src="https://playarena.in/wp-content/uploads/2024/05/Treats-on-us.svg" alt="" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">TREATS ON US</h3>
              <p className="text-blue-800">Get exclusive offers across our F&B outlets</p>
            </div>
            <div>
              <img src="https://playarena.in/wp-content/uploads/2024/05/Big-Discounts.svg" alt="" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">BIG DISCOUNTS</h3>
              <p className="text-blue-800">The more you load the bigger your discounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayItCool;
