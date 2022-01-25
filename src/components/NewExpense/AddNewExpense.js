import React from 'react';

const AddNewExpense = ({handleFormStateChange}) => {
  const handleAddExpenseClick = () => {
    handleFormStateChange();
  }
    return( 
    <div>
      <button onClick={handleAddExpenseClick}>Add Expense</button>
    </div>
  )
};

export default AddNewExpense;
