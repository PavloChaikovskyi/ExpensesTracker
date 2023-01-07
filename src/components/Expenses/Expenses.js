import "./Expenses.css"
import ExpenseItem  from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";


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

    {filteredExpenses.map((expense) => {
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