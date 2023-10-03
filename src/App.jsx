import { useState } from 'react'
import './App.css'

const UseDate = (initialDate) =>{
  const [date, setDate] = useState(initialDate);
  const newDate = new Date();

  const addDays = (daysToAdd) => {
    newDate.setDate(newDate.getDate() + daysToAdd);
    setDate(newDate);
  };

  const addMonths = (monthsToAdd) => {
    newDate.setMonth(newDate.getMonth() + monthsToAdd);
    
    setDate(newDate);
  };

  return{date, addDays, addMonths}

}



export default function App() {
  const { date, addDays, addMonths } = UseDate( new Date());

  const addDaysButton = () => {
    addDays(3)
    // Adds Three Days to the date
  }

  const addMonthsButton = () => {
    console.log('Hello')
    addMonths(2)
    // Adds Two Months to the date
  }
  return (
    <div className="body">
        <h2>Welcome!</h2>

        <h3>Click on the buttons to change the Day or Month</h3>

        <div className="date-div">
        <p>Current Date: {date.toDateString()}</p>
        <div class="btn-div">
      <button onClick={addDaysButton} class="btn-1">Change  Day</button>
      <button onClick={addMonthsButton} class='btn-2'>Change Month</button>
      </div>
        </div>
    </div>
  )
}

