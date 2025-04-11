import React from "react";
import {
  Play,
  Gamepad2,
  Users,
  Baby,
  Monitor,
  Gift,
  Briefcase,
  Heart,
} from "lucide-react";

function Header() {
  return (
      <nav className="bg-black/90 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center gap-2">
            <a title="Play Arena" href="https://playarena.in" class="logo">
              {" "}
              <img
                src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg"
                alt="Play Arena"
                width="90"
                height="40"
              />{" "}
            </a>
          </div>
          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-blue-400">
              Play
            </a>
            <a href="#" className="hover:text-blue-400">
              Participate
            </a>
            <a href="#" className="hover:text-blue-400">
              Host
            </a>
            <a href="#" className="hover:text-blue-400">
              F&B
            </a>
            <a href="#" className="hover:text-blue-400">
              About Us
            </a>
          </div>
        </div>
      </nav>
  );
}

export default Header;
