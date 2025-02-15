import React from "react";

import TaskEdit from "../task-edit-form/task-edit-form.component";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete, isEditing, setEditingTask }) => {
    return(
        <li>
            <input 
                type="checkbox"
                value={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            {isEditing ? (
                <TaskEdit task={task} onUpdate={(updatedTask) => {
                    onEdit(updatedTask.id, updatedTask);
                    setEditingTask(null);
                }} />
            ) : (
                <div>
                    <h3 style={{ textDecoration : task.completed ? 'line-through' : 'none' }}>
                        {task.task}
                    </h3>
                    <p><strong>Start:</strong>{task.startDate} {task.startTime}</p>
                    <p><strong>End:</strong>{task.endDate} {task.endTime}</p>
                    <p><strong>Notes:</strong>{task.notes}</p>
                    <p><strong>Category:</strong>{task.category}</p>

                    <button onClick={() => setEditingTask(task)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>    
            )}
            
        </li>
    );
}

export default TaskItem;