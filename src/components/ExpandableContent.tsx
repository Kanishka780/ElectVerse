"use client";

import { useState } from "react";

export default function ExpandableContent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center">
      {!expanded ? (
        <button 
          onClick={() => setExpanded(true)}
          className="px-6 py-2 border-2 border-green-500 text-green-700 rounded-full font-semibold hover:bg-green-50 transition"
        >
          More Info
        </button>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-inner border border-gray-100 mt-4 text-left w-full">
          <h3 className="text-lg font-bold text-green-700 mb-3">Deep Dive</h3>
          <p className="text-gray-700 mb-3">
            Here is a detailed explanation of the advanced mechanics and rules behind this topic. This section provides historical context, key constitutional articles, and real-world impact.
          </p>
          <p className="text-gray-700">
            Real examples include previous general elections where these rules played a pivotal role in maintaining fairness and democracy.
          </p>
        </div>
      )}
    </div>
  );
}
