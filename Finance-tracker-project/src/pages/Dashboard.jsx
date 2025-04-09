import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link, Routes, Route } from "react-router-dom";
import AccountSection from "../components/AccountSection";
import AddExpenses from "../components/AddExpenses";
import BudgetAndExpensesPage from "../pages/BudgetAndExpensesPage";
import CurrencyConverterPage from "../pages/CurrencyConverterPage";
import Navbar from "../components/Navbar";

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
      <Navbar hideMenu/>
        {/* Navbar */}
        
        {/* Navbar sections (Accounts, Budgets & Expenses, Currency Converter) */}
        <div className="bg-custom-yellow p-4 flex sm:flex-col sm:space-y-4 md:flex-row md:space-x-8 justify-between items-center">
          <Link
            to="/dashboard"
            className="text-white cursor-pointer hover:font-bold text-gray-200"
          >
            Accounts
          </Link>
          <Link
            to="/dashboard/budget-and-expenses"
            className="text-white cursor-pointer hover:font-bold text-gray-200"
          >
            Budgets & Expenses
          </Link>
          <Link
            to="/dashboard/currency-converter"
            className="text-white cursor-pointer hover:font-bold text-gray-200"
          >
            Currency Converter
          </Link>
          
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6"></h2>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Account and Expenses Sections */}
                  <AccountSection
                    accounts={accounts}
                    setAccounts={setAccounts}
                  />
                  <AddExpenses
                    accounts={accounts}
                    setAccounts={setAccounts}
                    expenses={expenses}
                    setExpenses={setExpenses}
                  />
                </>
              }
            />
            <Route
              path="/budget-and-expenses"
              element={
                <BudgetAndExpensesPage
                  accounts={accounts}
                  setAccounts={setAccounts}
                />
              }
            />

            <Route  path="/currency-converter"
            element={<CurrencyConverterPage/>}>
            </Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
