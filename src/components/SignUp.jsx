import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-800 text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-yellow-400">UniVents</h1>
          <p className="mt-5 text-xl font-semibold">
            Discover tailored events. <br /> Sign up for personalized recommendations today!
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>

          {/* Social Buttons */}
          <div className="mt-5 flex space-x-3">
            <button className="flex items-center space-x-2 border-2 border-gray-300 px-4 py-2 rounded-lg w-1/2 hover:bg-gray-100 transition cursor-pointer">
              <FaGoogle className="text-red-500" />
              <span>Sign up with Google</span>
            </button>
            <button className="flex items-center space-x-2 border-2 border-gray-300 px-4 py-2 rounded-lg w-1/2 hover:bg-gray-100 transition cursor-pointer">
              <FaFacebook className="text-blue-500" />
              <span>Sign up with Facebook</span>
            </button>
          </div>

          {/* OR Divider */}
          <div className="my-5 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">E-mail Address</label>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account? <a href="#" className="text-blue-500">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
