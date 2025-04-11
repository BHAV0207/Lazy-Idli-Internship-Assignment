import React, { useContext } from "react";
import { Gamepad2, Users, Baby, Monitor } from "lucide-react";
import { DataContext } from "../Store/DataContext";

function Cards() {


  const {data} = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 -mt-40 max-w-full mx-auto relative z-10">
      <div className="bg-[#e8ffd4] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-6">
        <Gamepad2 className="w-8 h-8 mb-3" />
        <h3 className="text-xl font-bold mb-2">Prime</h3>
        <p className="text-sm text-gray-700">
          Strategy and action sports for the squad
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View All {data.PRIME} Activities
        </button>
      </div>

      <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-6">
        <Monitor className="w-8 h-8 mb-3" />
        <h3 className="text-xl font-bold mb-2">Studio</h3>
        <p className="text-sm text-gray-700">
          Short format, big thrills served à la carte
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View All {data.STUDIO} Activities
        </button>
      </div>

      <div className="bg-[#d4f5ff] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-6">
        <Users className="w-8 h-8 mb-3" />
        <h3 className="text-xl font-bold mb-2">Union</h3>
        <p className="text-sm text-gray-700">
          Classic favourites for the recreational sport
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View All {data.UNION} Activities
        </button>
      </div>

      <div className="bg-[#d4ffec] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-6">
        <Baby className="w-8 h-8 mb-3" />
        <h3 className="text-xl font-bold mb-2">Junior</h3>
        <p className="text-sm text-gray-700">
          Toddler-sized fun for little champs
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View All {data.JUNIOR} Activities
        </button>
      </div>
      
    </div>
  );
}

export default Cards;
