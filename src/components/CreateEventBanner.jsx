import React, { useState } from "react";

const CreateEventBanner = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Progress Bar */}
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
        </div>
        
        <div className="flex-1 flex items-center justify-between">
        <span className="text-gray-400 font-semibold ml-35">Edit</span>
        <span className="text-gray-400 ml-33">Banner</span>
        <span className="text-gray-400 ml-30">Ticketing</span>
        <span className="text-gray-400 ml-30">Review</span>
        </div>
    </div>
</div>

      {/* Upload Section */}
      <h2 className="text-2xl font-semibold text-amber-400 text-left ml-20 mt-5">Upload Image</h2>
      
      {/* Image Preview */}
      {image && (
        <div className="mt-4 mx-auto w-96 h-40 border rounded-md overflow-hidden">
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* File Upload */}
      <div className="flex flex-col items-start ml-50 mt-10 space-y-2">
        <div className="mt-2">
          <label className="flex items-center cursor-pointer border rounded-md px-4 py-2 bg-white shadow-sm hover:bg-gray-100">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border">Choose File</span>
            <span className="px-3 text-gray-500">No file chosen</span>
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
          </label>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Feature Image must be at least <b>1170 pixels wide</b> by <b>504 pixels high</b>.
        </p>
        <p className="text-sm text-gray-400">Valid file formats: JPG, GIF, PNG.</p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end items-center mt-6 gap-5 pr-20">
        <button className="px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all">
          Go back to Edit Event
        </button>
        <button className="px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default CreateEventBanner;