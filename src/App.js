import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "200.00",
    date: new Date(2023, 1, 4),
  },
  {
    id: "e2",
    title: "Room",
    amount: "200.00",
    date: new Date(2022, 1, 4),
  },
  {
    id: "e3",
    title: "Food",
    amount: "200.00",
    date: new Date(2022, 1, 4),
  },
  {
    id: "e4",
    title: "Transport",
    amount: "200.00",
    date: new Date(2023, 1, 4),
  },
  {
    id: "e5",
    title: "Haircut",
    amount: "200.00",
    date: new Date(2021, 1, 4),
  },
  {
    id: "e6",
    title: "Gum",
    amount: "200.00",
    date: new Date(2021, 1, 4),
  }
]; 

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App-header">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
