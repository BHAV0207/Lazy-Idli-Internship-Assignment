import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

function Carousal() {

  const events = [
    {
      title: "The Perfect Shot",
      date: "7th-11th April",
      description: "Join our Photography Workshop from 7th-11th April & a special kids' session on 12th April, 4 PM onwards.",
      image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=400",
      color: "bg-[#e8ffd4]"
    },
    {
      title: "Egg & Seek",
      date: "18th April",
      description: "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
      image: "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?auto=format&fit=crop&w=400",
      color: "bg-[#d4ffec]"
    },
    {
      title: "Paw-some day out",
      date: "11th April",
      description: "Bring your furry friend for a fun-filled day on 11th April, 12 PM onwards! Enjoy games, treats, and tail-wagging fun because every pet deserves a special day out!",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=400",
      color: "bg-[#d4f5ff]"
    }
  ];


  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-full mx-auto px-20">
        <h2 className="text-5xl font-bold mb-12">NOW PLAYING</h2>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`${event.color} rounded-lg p-6 min-w-[300px]`}
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

          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
