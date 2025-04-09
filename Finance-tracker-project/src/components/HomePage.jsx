import React from "react";
import { Link } from "react-router-dom"; 
<Link to="/login"></Link>

const HomePage = () => {
  return (
    <div className="bg-gray-400">
      {/* Hero Section */}
      <section className="bg-custom-blue text-white p-10">
        <h1 className="text-3xl font-bold">Take Control of Your Finances</h1>
        <p className="mt-4 text-lg">
          Track spending, set budgets, and achieve your savings goals.
        </p>
        <Link to="/login"/>
        <div className="flex p2 gap2 ">
        <button className="mt-6 bg-custom-yellow p-2 rounded-lg mr-2">
          Start Tracking
        </button>
        <button className="mt-6 bg-custom-yellow p-2 rounded-lg">
        <a href="/Create" className="text-white hover: text-custom-blue text-bold ">
              Join Us
            </a>
        </button>
        </div>
      </section>

      <section className="p-10 grid grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl">Balance</h2>
          <p className="text-3xl font-bold">$3,500.00</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl">Expenses</h2>
          <p className="text-3xl font-bold">$1,200.00</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl">Savings</h2>
          <p className="text-3xl font-bold">$800.00</p>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl text-custom-yellow ">Recent Transactions</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex justify-between bg-gray-100 p-4 rounded-lg text-custom-blue">
            <span>Restaurant</span>
            <span className="text-red-500">-$50.00</span>
          </li>
          <li className="flex justify-between bg-gray-100 p-4 rounded-lg text-custom-blue">
            <span>Supermarket</span>
            <span className="text-red-500">-$80.00</span>
          </li>
        </ul>
        <button className="mt-4 text-custom-blue bg-custom-yellow">See More</button>
      </section>
    </div>
  );
};

export default HomePage;
