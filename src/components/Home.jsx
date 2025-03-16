import React from "react";
import { FaSearch, FaUserCircle, FaHome, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Twinkling from "../assets/Twinkling";

export default function UniVentsLanding() {
  const events = [
    { id: 1, name: "Tech Summit 2024", image: "https://source.unsplash.com/600x400/?technology,conference", date: "March 12, 2025", location: "MIT Campus" },
    { id: 2, name: "AI & ML Workshop", image: "https://source.unsplash.com/600x400/?ai,workshop", date: "April 5, 2025", location: "Stanford Hall" },
    { id: 3, name: "Campus Hackathon", image: "https://source.unsplash.com/600x400/?hackathon,coding", date: "May 20, 2025", location: "Harvard University" },
    { id: 4, name: "Startup Pitch Fest", image: "https://source.unsplash.com/600x400/?startup,entrepreneurship", date: "June 10, 2025", location: "Silicon Valley" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      


      {/* Hero Section */}
      <header
        className="relative text-center py-30 bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x700/?concert,festival')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"><Twinkling/></div>
        <motion.h2
          className="relative text-6xl font-extrabold text-yellow-400 drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Discover & Join the Best Campus Events
        </motion.h2>
        <motion.p
          className="relative text-lg text-gray-300 mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          Find, explore, and be part of amazing university experiences.
        </motion.p>
        
      </header>

      {/* Search Bar */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center bg-gray-800 px-6 py-3 rounded-full shadow-lg w-full max-w-lg border border-yellow-400">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="bg-transparent outline-none text-white px-4 w-full"
          />
        </div>
      </motion.div>

      {/* Events Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-200 mb-8">Upcoming Events</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={event.image} alt={event.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-yellow-400">{event.name}</h3>
                <p className="text-gray-300">{event.date} - {event.location}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400 mt-16">
        © 2025 UniVents. All Rights Reserved.
      </footer>
      
    </div>
  );
}