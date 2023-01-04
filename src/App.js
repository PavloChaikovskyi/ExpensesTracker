import ExpenseItem  from "./components/ExpenseItem";

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
      date: new Date(2023, 1, 4),
    },
  ]; 

  return (
    <div className="App-header">
      <h1>Hello World</h1>
      <p>Paragraph</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
