import { useState } from "react";
import { FaCamera, FaTrash } from "react-icons/fa";
import { LuScanFace } from "react-icons/lu";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  
  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Reset to default profile picture
  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-200 p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-15 ">Account Settings</h2>
        <ul className="space-y-4">
          <li className="bg-white font-semibold p-3 text-black rounded-md hover:bg-white">Account Info</li>
          <li className="text-black cursor-pointer p-3 rounded-md hover:bg-white">Change Email</li>
          <li className="text-black cursor-pointer p-3 rounded-md hover:bg-white">Password</li>
        </ul>
      </aside>

      {/* Profile Photo Upload Section (Moved to Right Side) */}
      
      <div className="absolute right-50 top-30 w-45 h-45 flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold text-gray-700"> Profile Photo </h2>
        <div className="relative w-30 h-32 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden shadow-md">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500"><LuScanFace size={60}/></span>
            </div>
          )}
        </div>

        {/* Edit and Delete Buttons */}
        <div className="flex space-x-2">
          <label className="bg-gray-200 p-2 rounded-full cursor-pointer">
            <FaCamera />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          {profileImage && (
            <button
              onClick={handleDeleteImage}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <FaTrash />
            </button>
          )}
          </div>
          </div>




      {/* Main Content */}
      <div className="flex-1 p-8 bg-white shadow-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Account Information</h2>
        <hr className="border-t border-gray-300 my-4" />

        {/* Profile Form */}
        <form className="mt-6 space-y-4">
            <h1 className="text-xl text-gray-700 font-semibold"> Profile Information</h1>
          {/* Row with Label & Input */}
          {[
            { label: "First Name", placeholder: "First name" },
            { label: "Last Name", placeholder: "Last name" },
            { label: "Email", placeholder: "Email" },
            
          ].map((field, index) => (
            <div key={index} className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 font-semibold">{field.label}</label>
              <input
                type="text"
                className="w-1/4 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <h1 className="text-xl text-gray-700 font-semibold">Contact Details</h1>
          <p className="text-sm">These details are private and only used to contact you for ticketing or prizes.</p>
          {[
            { label: "Phone Number", placeholder: "Phone number" },
            { label: "Address", placeholder: "Address" },
            { label: "City/Town", placeholder: "City/Town" },
            { label: "Country", placeholder: "Country" },
            { label: "Pincode", placeholder: "Pincode" }
          ].map((field, index) => (
            <div key={index} className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 font-semibold">{field.label}</label>
              <input
                type="text"
                className="w-1/4 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
              />
            </div>
          ))}


          <button className="bg-[#2C3D4F] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#263545] cursor-pointer shadow-md">
            Save My Profile
          </button>
        </form>
      </div>
    </div>
  );
}
