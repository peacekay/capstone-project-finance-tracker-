import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddExpenses = ({ accounts, setAccounts }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: "",
    category: "",
    amount: "",
    date: "",
    description: "",
    account: "",
  });

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^\d.-]/g, "");
    setNewExpense((prev) => ({
      ...prev,
      amount: value,
    }));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    // Find the selected account and deduct the expense amount
    const selectedAccount = accounts.find((account) => account.name === newExpense.account);
    if (selectedAccount) {
      const expenseAmount = parseFloat(newExpense.amount);
      if (!isNaN(expenseAmount) && selectedAccount.startingAmount >= expenseAmount) {
        // Calculate the new balance after deducting the expense amount
        const updatedAccount = {
          ...selectedAccount,
          startingAmount: selectedAccount.startingAmount - expenseAmount,
        };

        // Update the accounts list with the new balance
        const updatedAccounts = accounts.map((account) =>
          account.name === newExpense.account ? updatedAccount : account
        );

        // Update the parent component's accounts state with the updated accounts
        setAccounts(updatedAccounts); // This will trigger a re-render with the updated balance

        // Save updated accounts to localStorage immediately
        localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

        // Save the expense to localStorage immediately
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

        // Reset the form
        setNewExpense({
          name: "",
          category: "",
          amount: "",
          date: "",
          description: "",
          account: "",
        });
        setIsAdding(false); // Close the form after saving
      } else {
        alert("Insufficient funds in the selected account!");
        return;
      }
    }
  };

  const handleDeleteExpense = (index) => {
    const expenseToDelete = expenses[index];
    const expenseAmount = parseFloat(expenseToDelete.amount);

    // Refund the expense amount to the corresponding account
    const updatedAccounts = accounts.map((account) =>
      account.name === expenseToDelete.account
        ? {
            ...account,
            startingAmount: account.startingAmount + expenseAmount,
          }
        : account
    );

    // Remove the expense from the expenses list
    const updatedExpenses = expenses.filter((_, i) => i !== index);

    // Update state with new accounts and expenses
    setAccounts(updatedAccounts);
    setExpenses(updatedExpenses);

    // Save updated accounts and expenses to localStorage
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-4xl mx-auto">
      {/* Expenses Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Expenses</h1>
        <button
          onClick={() => setIsAdding((prev) => !prev)} // Toggle form visibility
          className="flex items-center bg-custom-blue text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Expense
        </button>
      </div>

      {/* Show Add Expense Form if active */}
      {isAdding && (
        <form className="space-y-4" onSubmit={handleAddExpense}>
          <div>
            <label htmlFor="expenseName" className="block text-custom-blue font-medium">
              Expense Name
            </label>
            <input
              type="text"
              id="expenseName"
              name="name"
              value={newExpense.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter expense name"
            />
          </div>
          <div>
            <label htmlFor="expenseCategory" className="block text-custom-blue font-medium">
              Expense Category
            </label>
            <select
              id="expenseCategory"
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="expenseAmount" className="block text-custom-blue font-medium">
              Amount
            </label>
            <input
              type="text"
              id="expenseAmount"
              name="amount"
              value={newExpense.amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label htmlFor="expenseDate" className="block text-custom-blue font-medium">
              Date
            </label>
            <input
              type="date"
              id="expenseDate"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            />
          </div>
          <div>
            <label htmlFor="expenseDescription" className="block text-custom-blue font-medium">
              Description
            </label>
            <textarea
              id="expenseDescription"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter a description"
            />
          </div>

          {/* Account Selection */}
          <div>
            <label htmlFor="expenseAccount" className="block text-custom-blue font-medium">
              Select Account
            </label>
            <select
              id="expenseAccount"
              name="account"
              value={newExpense.account}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            >
              <option value="">Select Account</option>
              {accounts.map((account, index) => (
                <option key={index} value={account.name}>
                  {account.name} - Balance: ${account.startingAmount && !isNaN(account.startingAmount) ? account.startingAmount.toLocaleString() : "Invalid Balance"}
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

      {/* Display Added Expenses */}
      <div className="mt-8 space-y-4">
        {expenses.map((expense, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{expense.name}</h3>
              <p className="text-gray-500">{expense.category} | {expense.date}</p>
              <p className="text-gray-500">Amount: ${parseFloat(expense.amount).toLocaleString()}</p>
              <p className="text-gray-500">{expense.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDeleteExpense(index)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddExpenses;
