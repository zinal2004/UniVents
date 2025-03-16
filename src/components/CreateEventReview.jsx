import React from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
const CreateEventReview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Main Container */}
      <div className="w-full max-w-4xl">
        {/* Event Title */}
        <h1 className="text-3xl font-bold text-gray-800">Event Title</h1>
        <p className="text-gray-600">Location</p>
        <p className="text-gray-600">Time</p>
    <div className="flex items-center w-full max-w-5xl mx-auto mt-10">
      <div className="flex-1">
        <div className="flex-1 flex items-center">
        {/* Step 1 - Active */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-800"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
        <div className="w-full h-1 bg-gray-800"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
        <div className="w-full h-1 bg-gray-800"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-800"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        </div>
        
        <div className="flex-1 flex items-center justify-between">
        <span className="text-gray-900 font-semibold ml-35">Edit</span>
        <span className="text-gray-400 ml-33">Banner</span>
        <span className="text-gray-400 ml-30">Ticketing</span>
        <span className="text-gray-400 ml-30">Review</span>
        </div>
    </div>
</div>
<div className="bg-white shadow-md rounded-lg p-6 mt-6 border">
          <div className="flex">
            {/* Event Image Placeholder */}
            <div className="w-1/3 flex items-center justify-center bg-gray-200 rounded-lg h-40">
              <span className="text-gray-500 text-lg">📷 Image</span>
            </div>

            {/* Event Details */}
            <div className="w-2/3 pl-6">
              <h2 className="text-xl font-bold">Event Title</h2>

              {/* Date & Time */}
              <div className="flex items-center mt-2">
                <FaCalendarAlt className="text-gray-500" />
                <p className="ml-2 text-gray-600">Day, Date</p>
              </div>
              <div className="flex items-center mt-1">
                <FaClock className="text-gray-500" />
                <p className="ml-2 text-gray-600">Time</p>
              </div>
              <p className="text-blue-600 mt-2 cursor-pointer hover:underline">+ Add to Calendar</p>

              {/* Location */}
              <div className="flex items-center mt-4">
                <FaMapMarkerAlt className="text-gray-500" />
                <p className="ml-2 text-gray-600">Address</p>
              </div>

              {/* Ticket Info */}
              <div className="flex items-center mt-4">
                <FaTicketAlt className="text-gray-500" />
                <p className="ml-2 text-gray-600">Ticket Type: Price /ticket</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Hosted by</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              Save For Later
            </button>
            <button className="bg-[#2C3E50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1A252F]">
              Publish Events
            </button>
          </div>
        </div>
</div>
</div>
  )
}

export default CreateEventReview;