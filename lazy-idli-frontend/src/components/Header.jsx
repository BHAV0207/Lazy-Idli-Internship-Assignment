import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isClickDropdownOpen, setIsClickDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = {
    Play: {
      PIXEL: [
        "Car Simulator",
        "Cricket Simulator",
        "Lazermaze",
        "7D Theatre",
        "VR Coaster",
        "VR Xscape",
        "Virtual Verve",
        "Hyper Grid",
      ],
      STUDIO: [
        "Archery",
        "Rope Course",
        "Rocket Ejector",
        "Wall Climbing",
        "Bumper Cars",
        "Trampoline Park",
        "Shooting",
        "Carnival Games",
      ],
      UNION: [
        "The Field",
        "Badminton",
        "Basketball",
        "Cricket Nets",
        "Swimming Pool",
        "Skate Park",
        "Gym",
      ],
      PRIME: ["Gokarting", "Bowling", "Lasertag", "Paintball", "Off Road ATV"],
      JUNIOR: ["Little Gym", "Soft Play"],
    },
    Participate: ["Up Your Game", "Events"],
    Host: ["Birthdays at PLaY", "Corporate Events"],
    "F&B": ["Food Court", "Restaurant"],
  };

  return (
    <nav className="bg-black/90 text-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <a title="Play Arena" href="https://playarena.in" className="logo">
            <img
              src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg"
              alt="Play Arena"
              width="90"
              height="40"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {Object.keys(navItems).map((item) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => {
                if (!isClickDropdownOpen) setActiveDropdown(item);
              }}
              onMouseLeave={() => {
                if (!isClickDropdownOpen) setActiveDropdown(null);
              }}
            >
              <button
                onClick={() => {
                  if (activeDropdown === item && isClickDropdownOpen) {
                    setActiveDropdown(null);
                    setIsClickDropdownOpen(false);
                  } else {
                    setActiveDropdown(item);
                    setIsClickDropdownOpen(true);
                  }
                }}
                className="relative py-2 px-1 text-white hover:text-yellow-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300"
              >
                {item}
              </button>

              {activeDropdown === item && (
                <div className="absolute top-full left-0 bg-white text-black mt-3 px-6 py-4 shadow-lg rounded-lg min-w-[300px] z-50 border border-gray-200">
                  {isClickDropdownOpen && (
                    <div className="text-right -mt-2 -mr-2 mb-2">
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsClickDropdownOpen(false);
                        }}
                        className="text-black hover:text-red-600"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}

                  {item === "Play" ? (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      {Object.entries(navItems[item]).map(
                        ([category, activities]) => (
                          <div key={category}>
                            <h3 className="text-blue-600 font-semibold text-base mb-2">
                              {category}
                            </h3>
                            <ul className="space-y-1">
                              {activities.map((activity) => (
                                <li
                                  key={activity}
                                  className="text-sm hover:text-blue-500 cursor-pointer transition"
                                >
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {navItems[item].map((subItem) => (
                        <li
                          key={subItem}
                          className="hover:text-blue-500 cursor-pointer text-sm transition"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2">
          {Object.keys(navItems).map((item) => (
            <div key={item}>
              <details className="group">
                <summary className="cursor-pointer text-lg font-semibold">
                  {item}
                </summary>
                <div className="pl-4 mt-2">
                  {item === "Play" ? (
                    Object.entries(navItems[item]).map(
                      ([category, activities]) => (
                        <div key={category} className="mb-3">
                          <h4 className="font-bold">{category}</h4>
                          <ul className="pl-2 list-disc text-sm">
                            {activities.map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )
                  ) : (
                    <ul className="pl-2 list-disc text-sm">
                      {navItems[item].map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
