import "./Expenses.css"
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

const [filteredYear, setFilteredYear] = useState("All");

const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
};

const filteredExpenses = filteredYear.toString() === 'All' ? props.items : props.items.filter(
  (item) => item.date.getFullYear().toString() === filteredYear
);

return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    <ExpensesList items={filteredExpenses} />
  </Card>
);
}

export default Expenses; 