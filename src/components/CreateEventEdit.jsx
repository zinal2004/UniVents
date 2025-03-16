import React, { useState } from "react";

const CreateEventEdit = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
    <h1 className="text-3xl font-semibold text-amber-400 text-left ml-45 mt-5">Create a new Event</h1>
    <div className="flex items-center w-full max-w-5xl mx-auto mt-5">
      <div className="flex-1">
        <div className="flex-1 flex items-center">
        {/* Step 1 - Active */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-300"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-600"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-600"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-600"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        </div>
        
        <div className="flex-1 flex items-center justify-between">
        <span className="text-gray-400 font-semibold ml-35">Edit</span>
        <span className="text-gray-400 ml-33">Banner</span>
        <span className="text-gray-400 ml-30">Ticketing</span>
        <span className="text-gray-400 ml-30">Review</span>
        </div>
    </div>
</div>
<div>
    {/* Event Form */}
    <div className="flex-col items-center space-x-4 space-y-4">
    <h2 className="text-2xl font-semibold text-amber-400 text-left ml-50 mt-5"> Event Details</h2>
    <div className="flex">
    <label className="w-40 text-white font-semibold ml-55">Event Title *</label>
    <input type="text" placeholder="Event Title" className="w-60 h-9 p-1 border border-white text-white rounded-md" />
    </div>
    <div className="flex">
    <label className="w-40 text-white font-semibold ml-55">Event Category *</label>
    <input type="text" placeholder="Event Category" className="w-60 h-9 p-1 border border-white text-white rounded-md" />
    </div>
    <h2 className="text-2xl font-semibold text-white text-left ml-50 mt-2"> Date & Time</h2>
    <div className="flex items-center space-x-4">
    <label className="w-40 text-white font-semibold ml-55">Event Type *</label>
    <label className="flex items-center text-white">
    <input type="radio" name="eventType" className="mr-2" checked />Single Event
    </label>
    <label className="flex items-center text-white">
    <input type="radio" name="eventType" className="mr-2 " />Recurring Event
    </label>
    </div>
    <div className="flex">
    <label className="w-40 text-white font-semibold ml-55">Session(s) *</label>
    <div>
    <label className="w-10 text-white font-semibold ml-5">Start Date *</label>
    <label className="w-40 text-white font-semibold ml-55">Start Time *</label>
    <label className="w-40 text-white font-semibold ml-55">End Time *</label>
    </div>
    </div>
    <div className="flex items-center space-x-4">
    <input type="date" className="p-2 border border-white rounded-md w-50 ml-90 text-white" />
    <input type="time" className="p-2 border border-white rounded-md w-50 ml-20 text-white" />
    <input type="time" className="p-2 border border-white rounded-md w-50 ml-20 text-white" />
    </div>
    <h2 className="text-2xl font-semibold text-white text-left ml-50 mt-2">Location</h2>
    <div className="flex">
    <label className="w-40 text-white font-semibold ml-55">Where will your event take place? *</label> 
    <select className="w-250 border border-white text-white rounded-md h-10 ml-7">
    <option>Online</option>
    <option>Physical Location</option>
    </select>
    </div>
    <h2 className="text-2xl font-semibold text-white text-left ml-50 mt-2">Additional Information</h2>
    <div className="flex">
    <label className="w-40 text-white font-semibold ml-55">Event Description *</label>
    <textarea placeholder="Event Description *" className="w-250 p-2 border border-white text-white rounded-md h-24 ml-7"></textarea>
    </div>
    <div className="text-right mr-10">
    <button className="px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all">Save & Continue</button>
    </div>
    </div>                     
    </div>                                      
</div>
)}

export default CreateEventEdit;