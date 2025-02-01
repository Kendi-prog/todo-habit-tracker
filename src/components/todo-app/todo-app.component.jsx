import React, { useState } from "react";
import TaskInput from "../task-input/task-input.component";

const Todo = () => {
    const [tasks, setTasks] = useState('');

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    
    }

    return (
        <div>
            <h2>To-do List</h2>
            <TaskInput addTask={addTask} cancelTask={() => {}}/>
            <ul>
                {tasks.map((task, index) => {
                    return (
                    <li key={index}>{task.task} - {task.startDate} to {task.endDate}</li>
                )})}
            </ul>
            
        </div>
    );
}

export default Todo;