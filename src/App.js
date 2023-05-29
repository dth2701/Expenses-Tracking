import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Clothes Shopping',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Health Insurance',
    amount: 79.60,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Coffee Machine',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) => {
      // Return a new arr baded on prevState
      return [expense, ...prevExpenses]; 
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
};
export default App;
