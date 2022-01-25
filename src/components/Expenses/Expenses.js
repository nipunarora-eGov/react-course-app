import React, {useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [filterData,setFilterData] = useState("2020");
  const addExpenseFilterData = (data) => {
    setFilterData(data);
  }
  const filterArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterData
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected = {filterData} onAddFilterData = {addExpenseFilterData}/>
        <ExpensesChart expenses = {filterArray}/>
        <ExpensesList items = {filterArray} />
      </Card>
    </div>
  );
}

export default Expenses;
