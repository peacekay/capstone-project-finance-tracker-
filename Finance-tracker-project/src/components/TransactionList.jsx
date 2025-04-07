import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between p-4 mb-2 border-b ${
              transaction.type === 'income'
                ? 'bg-green-100'
                : 'bg-red-100'
            }`}
          >
            <div>{transaction.description}</div>
            <div className={`font-bold ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
              ${transaction.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
