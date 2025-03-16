import React from 'react'

const ProfileEmail = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-1/6 bg-gray-200 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-15 ">Account Settings</h2>
      <ul className="space-y-4">
        <li className="text-black cursor-pointer p-3 rounded-md hover:bg-white">Account Info</li>
        <li className="bg-white font-semibold p-3 text-black rounded-md hover:bg-white">Change Email</li>
        <li className="text-black cursor-pointer p-3 rounded-md hover:bg-white">Password</li>
      </ul>
    </aside>
    {/* Profile Information */}
      <div className="flex-1 p-8 bg-white shadow-md">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Change Email</h2>
      <hr className="border-t border-gray-300 my-4" />
    <form className="mt-10 space-y-4">
{/* Row with Label & Input */}
{[
  { label: "Current Email", placeholder: "Current Email" },
  { label: "New Email", placeholder: "New Email" },
  { label: "Confirm Email", placeholder: "Confirm Email" },
].map((field, index) => (
<div key={index} className="flex items-center space-x-4">
  <label className="w-1/4 text-gray-700 font-semibold">{field.label}</label>
  <input
    type="text"
    className="w-1/4 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C3D4F]"
    placeholder={field.placeholder}
  />
</div>
))}
<button className="bg-[#2C3D4F] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#263545] cursor-pointer shadow-md">
            Save My Email
          </button>
</form>
</div>
</div>
  )
}

export default ProfileEmail