import React, { useState } from "react";

import TaskItem from "../task-item/task-item.component";

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

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
            <ul>
                {tasks.length === 0 ? (
                    tasks.map( task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onEdit={updateTask}
                        onDelete={deleteTask}
                        onToggleComplete={toggleTaskCompletion}
                        isEditing={editingTask && editingTask.id === task.id}
                        setEditingTask={setEditingTask}/> 
                    
                    ))) : (
                        <li>No Tasks Available</li>
                    )}
            </ul>
        </div>
    );
}

export default TaskManagement;