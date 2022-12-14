import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {v4 as uuid4} from 'uuid';
import task from './components/Task';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import axios from 'axios';

const App = () =>{
  const [tasks, setTasks] = useState([]);
 
const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks, {
      title: taskTitle,
      id: uuid4(),
      completed: false,
    }]
   setTasks(newTasks);
}

useEffect(() =>{
    const fetchTasks = async () =>{
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=8'
        )
       setTasks(data);
    }

    fetchTasks();
}, []);


  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map (task =>{
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    })
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" 
               exact 
               render={()=>(
                <>
                     <AddTask handleTaskAddition={handleTaskAddition}/>
                       <Tasks tasks={tasks} 
                       handleTaskClick={handleTaskClick}  
                     handleTaskDeletion={handleTaskDeletion}
                  />
               </>
        )} 
        />
   
   <Route path="/:taskTitle" exact component={TaskDetails} />     
      </div>
      </Router>
    )}

    export default App;