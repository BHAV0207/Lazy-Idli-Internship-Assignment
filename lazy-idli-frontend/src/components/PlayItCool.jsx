import { ChevronRight } from 'lucide-react'
import React from 'react'

function PlayItCool() {
  return (
    <div className="bg-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold mb-4">Play it cool</h2>
          <p className="text-lg mb-8">We call this our Royalty Programme.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Become a member
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SKIP THE QUEUE</h3>
            <p>No ticketing. Just load your card and go play.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">TREATS ON US</h3>
            <p>Get exclusive offers across our F&B outlets</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">BIG DISCOUNTS</h3>
            <p>The more you load the bigger your discounts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PlayItCool