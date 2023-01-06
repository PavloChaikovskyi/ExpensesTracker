import "./Expenses.css"
import ExpenseItem  from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";


const Expenses = (props) => {
  
const [filteredYear, setFilteredYear] = useState("2023");

const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
  console.log(selectedYear);
};

return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />

    {props.items.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      );
    })}
  </Card>
);


}

export default Expenses; 