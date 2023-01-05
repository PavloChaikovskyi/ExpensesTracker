import Expenses from "./components/Expenses/Expenses";
import React from 'react'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "200.00",
      date: new Date(2023, 1, 4),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "220.00",
      date: new Date(2023, 2, 4),
    },
    {
      id: "e2",
      title: "Candies",
      amount: "230.00",
      date: new Date(2023, 2, 5),
    },
  ]; 

  return (
    <div className="App-header">
      <h2>Let's get started!</h2>
      <Expenses  items={expenses}/>
    </div>
  );
}

export default App;
