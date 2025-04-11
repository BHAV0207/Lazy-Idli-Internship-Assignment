import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6 border-t-2 border-blue-600">
      <div className="p-4 text-center text-white text-md font-semibold">
        &copy; {new Date().getFullYear()} PlayArena. All rights reserved.{" "}
        <span className="text-bold text-blue-500">
          <a href="">Disclamer</a>
        </span>{" "}
        |{" "}
        <span className="text-bold text-blue-500">
          <a href="">Privacy Policy</a>
        </span>{" "}
        |{" "}
        <span className="text-bold text-blue-500">
          <a href="">About Us</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
