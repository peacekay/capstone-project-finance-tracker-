import React from "react";
import expenseLogin from "../assets/expense-login.avif";
import { FaEnvelope, FaKey } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="mx-auto flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm">
        {/* Image */}
        <img
          src={expenseLogin}
          alt="expense image"
          className="w-48 h-38 object-cover mb-6 rounded-lg"
        />

        {/* Welcome Text */}
        <h2 className="text-xl text-custom-yellow font-semibold mb-2">Welcome Back!</h2>
        <h3 className="text-custom-blue mb-4">Login to Financier</h3>

        {/* Login Form */}
        <form className="w-full">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FaKey className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm text-custom-blue hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-custom-yellow text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
