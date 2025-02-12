import React, { useState } from "react";

import TaskInput from "../task-input/task-input.component";
import TaskItem from "../task-item/task-item.component";

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id:Date.now(), completed:false}]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, task: updatedTask } : task)));
        setEditingTask(null);
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? (
                {...task, completed: !task.completed}
            ) : task
        )));
    }

    return(
        <div>
            <TaskInput addTask={addTask}/>
            <ul>
                {tasks.map( task => (
                   <TaskItem 
                    key={task.id}
                    task={task}
                    onEdit={updateTask}
                    onDelete={deleteTask}
                    onToggleComplete={toggleTaskCompletion}
                    isEditing={editingTask && editingTask.id === task.id}
                    setEditingTask={setEditingTask}/> 
                 
                ))}
            </ul>
        </div>
    );
}

export default TaskManagement;