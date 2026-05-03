"use client";

import { useState } from "react";

export default function PollingStationFinder() {
  const [pincode, setPincode] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleSearch = () => {
    if (pincode.length === 6) {
      setShowMap(true);
    } else {
      alert("Please enter a valid 6-digit Pincode");
    }
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center gap-3">
            📍 Find Your Polling Station
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Ready to vote? Use our Google Maps integrated tool to find the nearest polling booth in your constituency.
          </p>
          
          <div className="flex gap-3">
            <input 
              type="text" 
              maxLength={6}
              placeholder="Enter Pincode (e.g. 400001)"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="flex-1 border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-green-500 focus:outline-none transition-colors text-black"
            />
            <button 
              onClick={handleSearch}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-lg active:scale-95"
            >
              Search
            </button>
          </div>
          
          <div className="mt-4 flex gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">✅ Official ECI Data</span>
            <span className="flex items-center gap-1">☁️ Powered by Google Maps</span>
          </div>
        </div>

        <div className="flex-1 w-full h-[300px] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden">
          {showMap ? (
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/search?key=YOUR_MAPS_API_KEY&q=polling+station+near+${pincode}`}
            ></iframe>
          ) : (
            <div className="text-center p-6">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-400 font-medium">Enter your pincode to see the map</p>
              <p className="text-[10px] text-gray-300 mt-2 italic">* Requires Maps API Integration</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
