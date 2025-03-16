import React from "react";

export default function UniVentsLanding() {
  const events = [
    { id: 1, name: "Tech Summit 2024", image: "https://source.unsplash.com/400x300/?technology,conference" },
    { id: 2, name: "AI & ML Workshop", image: "https://source.unsplash.com/400x300/?artificial,intelligence" },
    { id: 3, name: "Campus Hackathon", image: "https://source.unsplash.com/400x300/?hackathon,coding" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">UniVents</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Discover and attend the most exciting campus events, workshops, and hackathons.  
          Explore opportunities, connect with peers, and grow your skills!
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-200">Why Choose UniVents?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-yellow-400">🚀 Explore Top Events</h3>
            <p className="text-gray-300 mt-2">Discover exclusive university events, workshops, and meetups.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-yellow-400">📅 Easy Event Management</h3>
            <p className="text-gray-300 mt-2">Create, manage, and share events seamlessly.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-yellow-400">🤝 Network & Grow</h3>
            <p className="text-gray-300 mt-2">Connect with like-minded individuals and expand your circle.</p>
          </div>
        </div>
      </div>

    


      {/* Final CTA */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-200">Join UniVents Today!</h2>
        <p className="text-gray-400 mt-2">Be a part of the most exciting university events platform.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition">
            Sign Up Now
          </button>
          <button className="px-6 py-3 border border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition">
            Login
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-400 mt-12">
        © 2025 UniVents. All Rights Reserved.
      </div>
    </div>
  );
}
