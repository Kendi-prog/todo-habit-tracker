import React, { useState } from "react";
import TaskInput from "../task-input/task-input.component";

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    
    }

    return (
        <div>
            <TaskInput addTask={addTask} cancelTask={() => {}}/>
            <ul>
                {tasks.map((task, index) => {
                    return (
                    <li key={index}>{task.task} - {task.start} to {task.end}</li>
                )})}
            </ul>
            
        </div>
    );
}

export default Todo;