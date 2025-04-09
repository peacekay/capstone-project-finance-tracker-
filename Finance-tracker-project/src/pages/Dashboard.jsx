import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom"; // No need to import Router
import AccountSection from "../components/AccountSection";
import AddExpenses from "../components/AddExpenses";
import BudgetAndExpensesPage from "../pages/BudgetAndExpensesPage";

function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem("accounts"));
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));

    if (savedAccounts) setAccounts(savedAccounts);
    if (savedExpenses) setExpenses(savedExpenses);
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center">
      <div className="w-full max-w-[1400px] px-4">
        {/* Navbar */}
        <nav className="bg-custom-yellow p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-4">
            <i className="fa fa-bars text-white w-6 h-6 cursor-pointer" />
            <h1 className="text-white text-lg sm:text-xl font-bold">Home</h1>
          </div>
          <div>
            <i className="fa fa-bell text-white w-6 h-6 cursor-pointer" />
          </div>
        </nav>

        {/* Navbar sections (Accounts, Budgets & Expenses, Currency Converter) */}
        <div className="bg-custom-yellow p-4 flex sm:flex-col sm:space-y-4 md:flex-row md:space-x-8 justify-between items-center">
          <Link to="/" className="text-white cursor-pointer hover:font-bold text-gray-200">
            Accounts
          </Link>
          <Link
            to="/budget-and-expenses"
            className="text-white cursor-pointer hover:font-bold text-gray-200"
          >
            Budgets & Expenses
          </Link>
          <div className="text-white cursor-pointer hover:font-bold text-gray-200">
            Currency Converter
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6"></h2>
          <Routes>
            <Route path="/" element={
              <>
                {/* Account and Expenses Sections */}
                <AccountSection accounts={accounts} setAccounts={setAccounts} />
                <AddExpenses
                  accounts={accounts}
                  setAccounts={setAccounts}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
              </>
            } />
            <Route path="/budget-and-expenses" element={<BudgetAndExpensesPage accounts={accounts} setAccounts={setAccounts} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
