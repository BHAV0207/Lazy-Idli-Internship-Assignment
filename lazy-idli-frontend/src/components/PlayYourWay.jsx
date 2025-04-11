import React from "react";
import { Gift, Briefcase, Heart } from 'lucide-react';


function PlayYourWay() {
  return (
    <div className="max-w-full mx-auto px-30 py-20 bg-yellow-400" >
      <h2 className="text-5xl font-bold mb-8">Play, Your Way</h2>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        When it comes to get-togethers, the more is always the merrier. You
        bring the people, we'll take care of the rest. Call us for customized
        birthdays, farewells, anniversaries and other events or group packages
        with entertainment, music and a fantastic range of F&B to choose from.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#fff5f5] p-8 rounded-lg shadow-lg text-center">
          <Gift className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Birthday Bashes</h3>
        </div>

        <div className="bg-[#f5f5ff] p-8 rounded-lg shadow-lg text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Corporate Events</h3>
        </div>

        <div className="bg-[#fff5f5] p-8 rounded-lg shadow-lg text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Play Dates</h3>
        </div>
      </div>
    </div>
  );
}

export default PlayYourWay;
