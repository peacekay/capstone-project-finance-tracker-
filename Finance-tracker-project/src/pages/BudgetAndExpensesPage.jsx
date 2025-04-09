import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BudgetAndExpensesPage = ({ accounts, setAccounts }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newBudget, setNewBudget] = useState({
    category: "",
    budgetedAmount: "",
    dateRange: "",
  });

  const [newExpense, setNewExpense] = useState({
    name: "",
    category: "",
    amount: "",
    date: "",
    description: "",
    account: "",
  });

  // State to toggle visibility of forms
  const [isAddingBudget, setIsAddingBudget] = useState(false);
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  useEffect(() => {
    const storedBudgets = JSON.parse(localStorage.getItem("budgets"));
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedBudgets) setBudgets(storedBudgets);
    if (storedExpenses) setExpenses(storedExpenses);
  }, []);

  const handleBudgetInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget((prev) => ({ ...prev, [name]: value }));
  };

  const handleExpenseInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBudget = (e) => {
    e.preventDefault();
    const updatedBudgets = [...budgets, newBudget];
    setBudgets(updatedBudgets);
    localStorage.setItem("budgets", JSON.stringify(updatedBudgets));
    setNewBudget({ category: "", budgetedAmount: "", dateRange: "" });
    setIsAddingBudget(false); // Hide the form after saving
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const selectedAccount = accounts.find((account) => account.name === newExpense.account);
    if (selectedAccount) {
      const expenseAmount = parseFloat(newExpense.amount);
      const selectedBudget = budgets.find((budget) => budget.category === newExpense.category);
      
      if (!isNaN(expenseAmount)) {
        // Update expenses
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

        // Deduct expense from selected budget
        if (selectedBudget) {
          selectedBudget.budgetedAmount = (parseFloat(selectedBudget.budgetedAmount) - expenseAmount).toFixed(2);
          const updatedBudgets = budgets.map((budget) =>
            budget.category === newExpense.category ? selectedBudget : budget
          );
          setBudgets(updatedBudgets);
          localStorage.setItem("budgets", JSON.stringify(updatedBudgets));
        }

        // Deduct amount from account
        const updatedAccount = {
          ...selectedAccount,
          startingAmount: selectedAccount.startingAmount - expenseAmount,
        };

        const updatedAccounts = accounts.map((account) =>
          account.name === newExpense.account ? updatedAccount : account
        );
        setAccounts(updatedAccounts);
        localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

        // Reset the form
        setNewExpense({
          name: "",
          category: "",
          amount: "",
          date: "",
          description: "",
          account: "",
        });
        setIsAddingExpense(false); // Hide the form after saving
      } else {
        alert("Invalid amount!");
      }
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-4xl mx-auto">
      {/* Budget Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Budgets Overview</h2>
        <div className="space-y-4 mt-4">
          {budgets.map((budget, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md text-custom-blue">
              <h3 className="font-semibold">{budget.category}</h3>
              <p>Total Budgeted: ${parseFloat(budget.budgetedAmount).toLocaleString()}</p>
              <p>Remaining: ${parseFloat(budget.budgetedAmount).toLocaleString()}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsAddingBudget(!isAddingBudget)} // Toggle budget form visibility
          className="flex items-center bg-custom-blue text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300 mt-4"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Budget
        </button>
      </div>

      {/* Add Budget Form */}
      {isAddingBudget && (
        <div className="mt-6">
          <form onSubmit={handleAddBudget} className="space-y-4">
            <div>
              <label htmlFor="category" className="block text-custom-blue font-medium">Category</label>
              <input
                type="text"
                name="category"
                value={newBudget.category}
                onChange={handleBudgetInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter category"
              />
            </div>
            <div>
              <label htmlFor="budgetedAmount" className="block text-custom-blue font-medium">Budgeted Amount</label>
              <input
                type="text"
                name="budgetedAmount"
                value={newBudget.budgetedAmount}
                onChange={handleBudgetInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter budgeted amount"
              />
            </div>
            <div>
              <label htmlFor="dateRange" className="block text-custom-blue font-medium">Date Range</label>
              <input
                type="text"
                name="dateRange"
                value={newBudget.dateRange}
                onChange={handleBudgetInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter date range"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-custom-blue text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300 "
            >
              Save Budget
            </button>
          </form>
        </div>
      )}

      {/* Expense Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Add Expenses</h2>
        <button
          onClick={() => setIsAddingExpense(!isAddingExpense)} // Toggle expense form visibility
          className="flex items-center bg-custom-blue text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300 mt-4"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Expense
        </button>

        {/* Add Expense Form */}
        {isAddingExpense && (
          <form onSubmit={handleAddExpense} className="space-y-4 mt-4">
            <div>
              <label htmlFor="expenseName" className="block text-custom-blue font-medium">Expense Name</label>
              <input
                type="text"
                name="name"
                value={newExpense.name}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter expense name"
              />
            </div>
            <div>
              <label htmlFor="expenseCategory" className="block text-custom-blue font-medium">Category</label>
              <select
                name="category"
                value={newExpense.category}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              >
                <option value="">Select Category</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget.category}>
                    {budget.category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="expenseAmount" className="block text-custom-blue font-medium">Amount</label>
              <input
                type="text"
                name="amount"
                value={newExpense.amount}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label htmlFor="expenseDate" className="block text-custom-blue font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              />
            </div>
            <div>
              <label htmlFor="expenseDescription" className="block text-custom-blue font-medium">Description</label>
              <textarea
                name="description"
                value={newExpense.description}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
                placeholder="Enter description"
              />
            </div>
            <div>
              <label htmlFor="expenseAccount" className="block text-custom-blue font-medium">Account</label>
              <select
                name="account"
                value={newExpense.account}
                onChange={handleExpenseInputChange}
                className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              >
                <option value="">Select Account</option>
                {accounts.map((account, index) => (
                  <option key={index} value={account.name}>
                    {account.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-custom-blue text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Save Expense
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BudgetAndExpensesPage;
