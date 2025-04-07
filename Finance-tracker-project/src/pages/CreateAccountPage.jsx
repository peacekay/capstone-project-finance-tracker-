import React from "react";
import expenseLogin from "../assets/expense-login.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function CreateAccountPage() {
  return (
    <div className="mx-auto flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm">
        {/* Image */}
        <img
          src={expenseLogin}
          alt="create account"
          className="w-48 h-48 object-cover mb-6 rounded-lg"
        />

        {/* Title */}
        <h2 className="text-xl text-custom-yellow font-semibold mb-2">Join Financier</h2>
        <h3 className="text-custom-blue mb-4">Create your account</h3>

        {/* Form */}
        <form className="w-full">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
              <input
                type="text"
                id="name"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FontAwesomeIcon icon={faKey} className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Create a password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
              <FontAwesomeIcon icon={faKey} className="text-gray-500 mr-2" />
              <input
                type="password"
                id="confirmPassword"
                className="w-full bg-gray-100 py-2 outline-none"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Login Link */}
          <p className="text-sm text-gray-600 mb-4">
            Already have an account?{" "}
            <a href="/login" className="text-custom-blue hover:underline">
              Login here
            </a>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-custom-yellow text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
