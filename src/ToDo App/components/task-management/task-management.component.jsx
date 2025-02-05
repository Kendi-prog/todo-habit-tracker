import React, { useState } from "react";

import TaskInput from "../task-input/task-input.component";
import TaskEditForm from "../task-edit-form/task-edit-form.component";

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id:Date.now(), completed:false}]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const startEditing = (task) => {
        setEditingTask(task);
    }

    const updateTask = (id, updatedText) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, task: updatedText } : task)));
        setEditingTask(null); // Reset editing state
    };

    return(
        <div>
            <TaskInput addTask={addTask}/>
            <ul>
                {tasks.map( task => (
                    <li key={task.id}>
                        {editingTask && editingTask.id === task.id ? (
                            <TaskEditForm task={task} onUpdate={updateTask}/>
                        ) : (
                            <div>
                               {task.task}
                               <button onClick={() => startEditing(task)}>Edit</button>
                               <button onClick={() => deleteTask(task.id)}>Delete</button>
                                
                            </div>
                        )}   
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManagement;