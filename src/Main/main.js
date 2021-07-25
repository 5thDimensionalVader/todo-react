import { useState, useEffect } from 'react';
import './main.css';
import View from '../Views/view';

const Main = () => {
  // state to get input and date
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [tasks, setTasks] = useState([{}]);

<<<<<<< HEAD
  // function to delete the task from the array
  const handleDelete = (key) => {

    for (let i = 0; i < tasks.length; i++){
        if (tasks[i] == tasks[key]){
          tasks.splice(i, 1);
        }
    }

  } 
=======
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

>>>>>>> 8ddb346c03dfd7fff1f0faa8abf23377105b256b


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
        <button onClick={() => setTasks([...tasks, {inputValue, inputDate}])}>Add Task</button>
      </div>

      {
        tasks.map((task, key) => (
          <View key={key} taskName={task.inputValue} taskDate={task.inputDate}/>
        ))
      }
    </div>
   );
}
 
export default Main;