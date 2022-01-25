import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList = ({items}) => {
    if(items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>
            {items.map((el) => (
                <ExpenseItem 
                key={el.id}
                title={el.title}
                amount={el.amount}
                date={el.date}
                />
            ))}
        </ul>
    )
};

export default ExpensesList;
