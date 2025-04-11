import { Facebook, Instagram, Linkedin, Send, Youtube } from "lucide-react";
import React, { useState } from "react";

function NewsLetterSection() {
  const [email, setEmail] = useState('');
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-5xl font-bold mb-4">Never miss an update</h2>
          <p className="mb-6">Subscribe to our Newsletter</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Email ID"
              className="bg-white/10 rounded px-4 py-2 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-600 p-2 rounded">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold mb-4">
            Play Arena Sports & Adventure Pvt. Ltd.
          </h3>
          <p className="text-gray-400">
            Sy#75, Hosa Road, off Sarjapur Road,
            <br />
            opp Silverwood Regency Apartments,
            <br />
            Kasavanahalli, Bangalore 560035
          </p>
          <div className="flex gap-4 mt-4">
            <Instagram className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 mb-2">Play</p>
              <ul className="space-y-2">
                <li>Prime</li>
                <li>Studio</li>
                <li>Union</li>
                <li>Junior</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Host</p>
              <ul className="space-y-2">
                <li className="text-blue-400">Birthdays at PLaY</li>
                <li className="text-blue-400">Corporate events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterSection;
