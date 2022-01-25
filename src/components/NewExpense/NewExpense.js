import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = ({onAddExpense}) => {
    const onSubmitHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id:Math.random().toString()
        }
        onAddExpense(data);
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSubmitExpenseData = {onSubmitHandler}/>
    </div>
  );
};

export default NewExpense;
