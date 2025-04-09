import React, { useState } from "react";
import expenseLogin from "../assets/expense-login.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function CreateAccountPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Simulate success (you can connect to an API later)
    console.log("Account Created:", formData);
    setMessage("Account created successfully! 🎉");

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="mx-auto flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm">
        <img
          src={expenseLogin}
          alt="create account"
          className="w-48 h-48 object-cover mb-6 rounded-lg"
        />

        <h2 className="text-xl text-custom-yellow font-semibold mb-2">Join Financier</h2>
        <h3 className="text-custom-blue mb-4">Create your account</h3>

        {/* Message */}
        {message && (
          <div className="text-sm text-center text-red-500 font-medium mb-4">
            {message}
          </div>
        )}

        <form className="w-full" onSubmit={handleSubmit}>
          {[
            { id: "name", label: "Full Name", icon: faUser, type: "text" },
            { id: "email", label: "Email", icon: faEnvelope, type: "email" },
            { id: "password", label: "Password", icon: faKey, type: "password" },
            {
              id: "confirmPassword",
              label: "Confirm Password",
              icon: faKey,
              type: "password",
            },
          ].map(({ id, label, icon, type }) => (
            <div className="mb-4" key={id}>
              <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
                {label}
              </label>
              <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3">
                <FontAwesomeIcon icon={icon} className="text-gray-500 mr-2" />
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full bg-gray-100 py-2 outline-none"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              </div>
            </div>
          ))}

          <p className="text-sm text-gray-600 mb-4">
            Already have an account?{" "}
            <a href="/login" className="text-custom-blue hover:underline">
              Login here
            </a>
          </p>

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
