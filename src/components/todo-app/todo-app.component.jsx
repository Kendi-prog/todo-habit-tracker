import React, { useState } from "react";

import TaskInput from "../task-input/task-input.component";
import './todo-app.scss';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [personalCount, setPersonalCount] = useState(0);
    const [officialCount, setOfficialCount] = useState(0);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        updateCounts(newTask.category);
    
    }

    const updateCounts = (category) => {
        if(category === 'Personal'){
            setPersonalCount(prevCount => prevCount + 1);
        } else if (category === 'Official') {
            setOfficialCount(prevCount => prevCount + 1);
        }
    }

    const removeTask = (taskToRemove) => {
        const updatedTasks = tasks.filter(task => task !== taskToRemove);
        setTasks(updatedTasks);

        if(taskToRemove.category === 'Personal'){
            setPersonalCount(prevCount => Math.max(prevCount - 1, 0));
        } else if (taskToRemove.category === 'Official') {
            setOfficialCount(prevCount => Math.max(prevCount - 1, 0));
        }
    }

    return (
        <div className="todo-container">
            <div className="task-input-section">
                <TaskInput 
                addTask={addTask} 
                removeTask={removeTask}
                personalCount={personalCount}
                officialCount={officialCount}
                />
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