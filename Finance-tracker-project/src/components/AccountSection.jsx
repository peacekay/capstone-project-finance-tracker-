import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const AccountSection = ({ accounts, setAccounts }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newAccount, setNewAccount] = useState({
    name: "",
    type: "",
    color: "blue",
    startingAmount: "",
    currency: "",
    details: ""
  });

  const handleAddAccount = () => {
    setIsAdding((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAccount = () => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

    setNewAccount({
      name: "",
      type: "",
      color: "blue",
      startingAmount: "",
      currency: "",
      details: ""
    });
    setIsAdding(false);
  };

  const handleDeleteAccount = (accountName) => {
    const updatedAccounts = accounts.filter(account => account.name !== accountName);
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Accounts</h1>
        <button
          onClick={handleAddAccount}
          className="flex items-center bg-custom-blue text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Account
        </button>
      </div>

      {isAdding && (
        <div className="space-y-4">
          {/* Input fields (same as before) */}
          <div>
            <label htmlFor="accountName" className="block text-custom-blue font-medium">Account Name</label>
            <input
              type="text"
              id="accountName"
              name="name"
              value={newAccount.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter account name"
            />
          </div>
          <div>
            <label htmlFor="accountType" className="block text-custom-blue font-medium">Account Type</label>
            <select
              id="accountType"
              name="type"
              value={newAccount.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            >
              <option value="">Select Type</option>
              <option value="Saving">Saving</option>
              <option value="Checking">Checking</option>
              <option value="Credit">Credit</option>
            </select>
          </div>
          <div>
            <label htmlFor="accountColor" className="block text-custom-blue font-medium">Account Color</label>
            <input
              type="color"
              id="accountColor"
              name="color"
              value={newAccount.color}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            />
          </div>
          <div>
            <label htmlFor="accountAmount" className="block text-custom-blue font-medium">Starting Amount</label>
            <input
              type="text"
              id="accountAmount"
              name="startingAmount"
              value={newAccount.startingAmount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter starting amount"
            />
          </div>
          <div>
            <label htmlFor="accountCurrency" className="block text-custom-blue font-medium">Currency</label>
            <select
              id="accountCurrency"
              name="currency"
              value={newAccount.currency}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div>
            <label htmlFor="accountDetails" className="block text-custom-blue font-medium">Details</label>
            <textarea
              id="accountDetails"
              name="details"
              value={newAccount.details}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-custom-yellow bg-gray-100 text-custom-blue"
              placeholder="Enter account details"
            />
          </div>
          <button
            onClick={handleSaveAccount}
            className="w-full bg-custom-blue text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Save Account
          </button>
        </div>
      )}

      <div className="mt-8">
        {accounts.map((account, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <div
                className="w-12 h-12 rounded-full"
                style={{ backgroundColor: account.color }}
              />
              <div>
                <h3 className="text-xl font-semibold">{account.name}</h3>
                <p className="text-sm text-gray-500">Type: {account.type}</p>
                <p className="text-sm text-gray-500">
                  Starting Balance: ${parseFloat(account.startingAmount).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-yellow-600 hover:text-yellow-800">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => handleDeleteAccount(account.name)}
                className="text-red-600 hover:text-red-800"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSection;
