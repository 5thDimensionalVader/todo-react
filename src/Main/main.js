import { useState } from 'react';
import './main.css';
import View from '../Views/view';

const Main = () => {
  // state to get input and date
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const tasks_ = [];

  // function 
  const handleClick = () => {
    const task = {
      task:'',
      date:''
    };

    task.task = inputValue;
    task.date = inputDate;
    tasks_.push(task);
    setTasks(tasks_);
    console.log(tasks);
  }



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