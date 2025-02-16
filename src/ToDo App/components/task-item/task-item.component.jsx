import React from "react";

import TaskEdit from "../task-edit-form/task-edit-form.component";
import { TaskContainer, TaskItemContainer, TaskName, TaskStartTime } from "./task-item.styles";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete, isEditing, setEditingTask }) => {
    return(
        <TaskItemContainer >
            <TaskStartTime>
                <p>{task.startTime}</p>
            </TaskStartTime>
            <TaskContainer category={task.category}>
                <TaskName completed={task.completed}>
                    {task.task}
                </TaskName>
                <p><strong>Notes:</strong>{task.notes}</p>
            </TaskContainer>
            {isEditing ? (
                <TaskEdit task={task} onUpdate={(updatedTask) => {
                    onEdit(updatedTask.id, updatedTask);
                    setEditingTask(null);
                }} />
            ) : (
                <div>
                    <button onClick={() => setEditingTask(task)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>    
            )}
            
        </TaskItemContainer>
    );
}

export default TaskItem;