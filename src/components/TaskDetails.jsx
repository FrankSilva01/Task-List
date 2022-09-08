import React from "react";
import Button from './Button';
import { useParams, useHistory } from'react-router-dom';
import styles from './TaskDetails.module.css';


    const TaskDetails = () => {
        const history = useHistory();
        const params = useParams();

        const handleBackButtonClick = () => {
            history.goBack();
        }

        return (
            <>
                <div className="back-button-container">
                    {/* <Button /> */}
                
                    <Button onClick={handleBackButtonClick}>
                        Voltar
                    </Button>
                </div>
                    <div className={styles.taskDetailsContainer}>
                        <h2>{params.taskTitle}</h2>
                            <p> 
                                 Lorem ipsum dolor sit amet consectetur 
                                     adipisicing elit. Ab numquam error assumenda 
                                 praesentium voluptatibus eveniet!
                             </p>
                     </div>
                 </>
        );
    }

    export default TaskDetails;