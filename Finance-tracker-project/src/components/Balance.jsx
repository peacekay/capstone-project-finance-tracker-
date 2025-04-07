import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold">Current Balance</h2>
      <p className="text-3xl font-bold text-green-500 mt-2">
        ${balance.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
