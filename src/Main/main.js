import { useState, useEffect } from 'react';
import './main.css';
import View from '../Views/view';

const Main = () => {
  // state to get input and date
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [tasks, setTasks] = useState([{}]);

  let tasks_ = [];

  // function 
  const handleClick = () => {
    const task = new Object();
    task.task = inputValue;
    task.date = inputDate;

     console.log(tasks);
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);



  return ( 
    <div className="mainContent">
      <h1>What needs to be done?</h1>
      <div className="formDiv">
        <input
          placeholder="Enter your task"
          type="text"
          value={inputValue}
          onChange={e => {setInputValue(e.target.value)}}
        />
        <input
          placeholder="Enter Due Date"
          type="date"
          value={inputDate}
          onChange={e=> {setInputDate(e.target.value)}}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>

      <View/>
    </div>
   );
}
 
export default Main;