import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

function Carousal() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const events = [
    {
      title: "The Perfect Shot",
      date: "7th-11th April",
      description:
        "Join our Photography Workshop from 7th-11th April & a special kids' session on 12th April, 4 PM onwards.",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Paw-some-day-out-768x512.png",
      color: "bg-[#e8ffd4]",
    },
    {
      title: "Egg & Seek",
      date: "18th April",
      description:
        "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Egg-Seek-768x512.png",
      color: "bg-[#d4ffec]",
    },
    {
      title: "Paw-some Day Out",
      date: "11th April",
      description:
        "Bring your furry friend for a fun-filled day on 11th April, 12 PM onwards! Enjoy games, treats, and tail-wagging fun because every pet deserves a special day out!",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Glow-it-Grow-it-768x512.png",
      color: "bg-[#d4f5ff]",
    },
    {
      title: "Paint the Town",
      date: "20th April",
      description:
        "A color splash party for kids & adults alike — vibrant games, paint zones & creativity galore!",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Little-Legends-got-talent-768x512.png",
      color: "bg-[#ffe4e1]",
    },
    {
      title: "Tech Explorers",
      date: "25th April",
      description:
        "Kids dive into coding, robotics & VR fun! A hands-on learning day like no other.",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Egg-Seek-768x512.png",
      color: "bg-[#f0e6ff]",
    },
    {
      title: "Mini Chef Challenge",
      date: "27th April",
      description:
        "Little ones become chefs for a day, whipping up fun snacks with pro guidance!",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Pop-a-bubble-party-768x512.png",
      color: "bg-[#fff9d4]",
    },
    {
      title: "Jungle Safari Hunt",
      date: "30th April",
      description:
        "Explore the mini jungle setup, solve riddles, and win exciting treasure prizes!",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/The-Perfect-Shot-768x512.png",
      color: "bg-[#d4ffe1]",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-full mx-auto px-20">
        <h2 className="text-5xl font-bold mb-12">NOW PLAYING</h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth pb-8"
          >
            {events.map((event, index) => (
              <div
                key={index}
                className={`${event.color} rounded-lg p-6 min-w-[300px] max-w-[300px] flex-shrink-0`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
