import "font-awesome/css/font-awesome.min.css";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center">
      {/* Main container */}
      <div className="w-full max-w-[1400px] px-4">
        {/* Navbar */}
        <nav className="bg-custom-yellow p-4 flex items-center justify-between shadow-md">
          {/* Left Section - Menu Icon and Home Title */}
          <div className="flex items-center space-x-4">
            <i className="fa fa-bars text-white w-6 h-6 cursor-pointer" />
            <h1 className="text-white text-lg sm:text-xl font-bold">Home</h1>
          </div>

          {/* Right Section - Notification Icon */}
          <div>
            <i className="fa fa-bell text-white w-6 h-6 cursor-pointer" />
          </div>
        </nav>

        {/* Navbar sections (Accounts, Budgets & Expenses, Currency Converter) */}
        <div className="bg-custom-yellow p-4 flex sm:flex-col sm:space-y-4 md:flex-row md:space-x-8 justify-between items-center">
          <div className="text-white cursor-pointer hover:font-bold text-gray-200">Accounts</div>
          <div className="text-white cursor-pointer hover:font-bold text-gray-200">Budgets & Expenses</div>
          <div className="text-white cursor-pointer hover:font-bold text-gray-200">Currency Converter</div>
        </div>

        {/* Main content */}
        <div className="p-4 space-y-6">
          {/* Accounts Section */}
          <section className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Accounts</h2>
            <p>Details about accounts will go here. Click to see more.</p>
          </section>

          {/* Budgets & Expenses Section */}
          <section className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Budgets & Expenses</h2>
            <p>Details about budgets and expenses will go here. Click to see more.</p>
          </section>

          {/* Track Savings Section */}
          <section className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Track Savings</h2>
            <p>Details about savings tracking will go here. Click to see more.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
