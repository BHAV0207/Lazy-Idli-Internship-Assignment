import React from "react";
import { Gift, Briefcase, Heart } from "lucide-react";

function PlayYourWay() {
  return (
    <div className="w-full px-10 md:px-12 lg:px-24 py-16 bg-orange-100">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Play, Your Way
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center font-medium">
        When it comes to get-togethers, the more is always the merrier. You bring
        the people, we'll take care of the rest. Call us for customized birthdays,
        farewells, anniversaries and other events or group packages with
        entertainment, music and a fantastic range of F&B to choose from.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Birthday Bashes */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <Gift className="w-14 h-14 md:w-16 md:h-16 text-black" />
            <h3 className="text-2xl md:text-3xl font-mono font-semibold">
              Birthday Bashes
            </h3>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg mb-4 w-full">
            <img
              src="https://playarena.in/wp-content/uploads/2024/12/BIRTHDAY-1.webp"
              alt="Birthday Bash"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="font-medium text-gray-700 mb-6 px-4">
            Thrilling activities, exciting games, and delicious food—our custom
            packages ensure unforgettable experiences for all ages!
          </p>
          <button className="p-3 px-6 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
            Find out more
          </button>
        </div>

        {/* Corporate Events */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <Briefcase className="w-14 h-14 md:w-16 md:h-16 text-black" />
            <h3 className="text-2xl md:text-3xl font-mono font-semibold">
              Corporate Events
            </h3>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg mb-4 w-full">
            <img
              src="https://playarena.in/wp-content/uploads/2024/12/corporate-1-1.webp"
              alt="Corporate Events"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="font-medium text-gray-700 mb-6 px-4">
            Nothing like a game to get the teamwork going. Talk to us to find
            out more about our corporate packages for offsites, team building,
            leadership meets, and more.
          </p>
          <button className="p-3 px-6 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
            Find out more
          </button>
        </div>

        {/* Play Dates */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <Heart className="w-14 h-14 md:w-16 md:h-16 text-black" />
            <h3 className="text-2xl md:text-3xl font-mono font-semibold">
              Play Dates
            </h3>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg mb-4 w-full">
            <img
              src="https://playarena.in/wp-content/uploads/2024/12/PERFECT-DATE-1.webp"
              alt="Play Dates"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="font-medium text-gray-700 mb-6 px-4">
            Experience Play Dates any day of the week—enjoy special offers and
            quality time with your partner. Perfect for fun and connection!
          </p>
          <button className="p-3 px-6 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayYourWay;
