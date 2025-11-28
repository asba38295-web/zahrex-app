"use client";
import React, { useState } from "react";

export default function HomePage() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center p-4">
      {!showDashboard ? (
        <Welcome onStart={() => setShowDashboard(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

function Welcome({ onStart }) {
  return (
    <div className="text-center w-full max-w-md">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Welcome Page
      </h1>

      <button
        onClick={onStart}
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition text-base md:text-lg w-full md:w-auto"
      >
        Go to Dashboard
      </button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="text-center w-full max-w-md">
      <h1 className="text-3xl md:text-5xl font-bold">
        Dashboard
      </h1>
    </div>
  );
}
