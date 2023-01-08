import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false); 

  const startEdidingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    
    return <div className="new-expense">

    {!isEditing && <form><button  onClick={startEdidingHandler} type="button">Add Expense</button></form>}
    {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    
    </div>
};

export default NewExpense; 