import React from 'react';

const IncomeExpense = ({ totalIncome, totalExpense }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between mb-4">
        <div className="text-xl font-semibold">Total Income</div>
        <div className="text-xl font-semibold text-green-500">
          ${totalIncome.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl font-semibold">Total Expense</div>
        <div className="text-xl font-semibold text-red-500">
          -${totalExpense.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
