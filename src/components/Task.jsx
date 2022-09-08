import React from 'react';
import styles from './Task.module.css';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom'

const Task = ({ task, handleTaskClick, handleTaskDeletion  }) => {
  const history = useHistory();

	const handleTaskDetailsClick = () => {
		history.push(`/${task.title}`);
	};

    return (
        <div 
            className={styles.taskContainer} 
            style={task.completed ? { borderLeft: '6px solid chartreuse', backgroundColor:'green'} : {}}
            >
         
          <div className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title} 
          </div>

            <div className={styles.buttonsContainer}>
               <button className={styles.removeTaskButton} 
               style={task.completed ? {backgroundColor:'green'} : {}}
               onClick={() => handleTaskDeletion(task.id)}>
                <CgClose/>
               </button>
            
               <button className={styles.seeTaskDetails} onClick={handleTaskDetailsClick}
               style={task.completed ? {backgroundColor:'green'} : {}}
               >
                <CgInfo/>
               </button>
          </div>
    </div>
  )
}

export default Task;