import React, { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        if(task) {
            setTasks([...tasks, { text: task, completed: false }]);

            setTask('');
        }
    }

    const removeTask = (taskToRemove) => {
        const newTasks = tasks.filter((_, i) => i !== taskToRemove);

        setTasks(newTasks);
    }

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => {
            if(i === index) {
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(newTasks);
    }


    return (
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Add new task"/>

            <button onClick={addTask}>Add Task</button>

            <ul>
                {
                    tasks.length === 0 ? ( 
                    <p>No Tasks Available</p> 
                    ) : (
                    tasks.map((addedTask, index) => (
                        <li key={index} style={{ textDecoration : addedTask.completed ? 'line-through' : 'none'}}>
                            {addedTask.text}
                            <button onClick={() => toggleTaskCompletion(index)}>Done</button>
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    )))
                }
            </ul>
            
        </div>
    );
}

export default Todo;