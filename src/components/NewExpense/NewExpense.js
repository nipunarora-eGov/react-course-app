import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import AddNewExpense from './AddNewExpense';
const NewExpense = ({formState,onAddExpense,handleFormStateChangeApp,handleFormStateChangeAppjs}) => {
    const onSubmitHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id:Math.random().toString()
        }
        onAddExpense(data);
    }
    const handleFormStateChange = () => {
      handleFormStateChangeApp();
    }
  return (
    <div className='new-expense'>
      {formState ? <ExpenseForm handleFormStateChange= {handleFormStateChange} onSubmitExpenseData = {onSubmitHandler}/> : <AddNewExpense handleFormStateChange = {handleFormStateChange} />}
    </div>
  );
};

export default NewExpense;
