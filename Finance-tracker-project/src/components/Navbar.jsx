import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Nav */}
      <nav className="bg-custom-yellow p-4 flex items-center justify-between shadow-md relative z-20">
        {/* Left: Menu + Title */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-white w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
          <h1 className="text-white text-lg sm:text-xl font-bold">Home</h1>
        </div>

        {/* Right: Bell */}
        <div>
          <FontAwesomeIcon
            icon={faBell}
            className="text-white w-6 h-6 cursor-pointer"
          />
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isOpen && (
        <>
          {/* Dimmed background */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          {/* Slide-out menu */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 px-6 py-10 flex flex-col space-y-6">
            <Link to="/dashboard" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Accounts
            </Link>
            <Link to="/dashboard/budget-and-expenses" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Budgets & Expenses
            </Link>
            <Link to="/dashboard/currency-converter" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Currency Converter
            </Link>
            <Link to="/dashboard/settings" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Settings
            </Link>
            <Link to="/dashboard/profile" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Profile
            </Link>
            <Link to="/dashboard/goals" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Goals
            </Link>
            <Link to="/dashboard/premium" className="text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Premium
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
