import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
  const [filterData,setFilterData] = useState("2020");
  const addExpenseFilterData = (data) => {
    setFilterData(data);
  }
  const filterArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterData
  })
  let expensesContent = <p>No Expenses Found</p>
  if(filterArray.length > 0) {
    expensesContent = filterArray.map((el) => {
        return (<ExpenseItem 
          key = {el.id}
          title={el.title}
          amount={el.amount}
          date={el.date} />)
      })
  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected = {filterData} onAddFilterData = {addExpenseFilterData}/>
      {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
