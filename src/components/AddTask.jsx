import React from 'react';
import styles from './AddTask.module.css';
import Button from './Button';
import { useState } from 'react';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState ("");
    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    };

        const handleAddTaskClick = () => {
            handleTaskAddition(inputData);
            setInputData('');
        }

    return (
        <div className={styles.addTaskContainer}>
             <input onChange={handleInputChange} 
             value={inputData} 
             className={styles.addTaskInput} 
             type="text" 
             placeholder="Digite a tarefa" />

            <div className={styles.addTaskButtonContainer}>
            <Button onClick={handleAddTaskClick}> Adicionar</Button >
            </div>
           
            
        </div>
    );
}

export default AddTask;