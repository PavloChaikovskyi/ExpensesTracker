import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

  const titleChangeHandler = (e) => {
    setUserinput({
        ...userInput,
        enteredTitle: e.target.value,
    });
  };

  const amountChangeHandler = (e) => {
    setUserinput({
        ...userInput,
        enteredAmount: e.target.value
    });
  };

  const dateChangeHandler = (e) => {
    setUserinput({
        ...userInput,
        enteredDate: e.target.value
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2023-01-30"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
