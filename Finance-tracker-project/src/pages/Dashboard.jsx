// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import TransactionList from '../components/TransactionList';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  // Dummy data for transactions (will eventually come from an API)
  useEffect(() => {
    const sampleTransactions = [
      { id: 1, type: 'income', amount: 2000, description: 'Salary' },
      { id: 2, type: 'expense', amount: 150, description: 'Groceries' },
      { id: 3, type: 'expense', amount: 50, description: 'Transport' },
    ];

    setTransactions(sampleTransactions);
  }, []);

  // Calculate total income, expenses, and balance
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Balance balance={balance} />
      <IncomeExpense totalIncome={totalIncome} totalExpense={totalExpense} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Dashboard;
