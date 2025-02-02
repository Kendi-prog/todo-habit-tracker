import React, { useState } from "react";

import TaskInput from "../task-input/task-input.component";
import './todo-app.scss';

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    
    }

    return (
        <div className="todo-container">
            <div className="task-input-section">
                <TaskInput addTask={addTask} cancelTask={() => {}}/>
            </div>
            <div className="task-list-section">
               <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>{task.task} - {task.start} to {task.end}</li>
                    )})}
                </ul> 
            </div>
            <div className="analytics-section">
                <h3>Analytics</h3>
            </div>
            
            
        </div>
    );
}

export default Todo;