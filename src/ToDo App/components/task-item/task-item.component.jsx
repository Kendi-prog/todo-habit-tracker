import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash } from "@fortawesome/free-solid-svg-icons";

import TaskEdit from "../task-edit-form/task-edit-form.component";
import { DeleteIcon, TaskContainer, TaskItemContainer, TaskName, TaskStartTime } from "./task-item.styles";


const TaskItem = ({ task, onEdit, onDelete, onToggleComplete, isEditing, setEditingTask }) => 
{
    return(
        <TaskItemContainer >
            <TaskStartTime>
                {task.startTime}
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
                <DeleteIcon onClick={() => onDelete(task.id)}> 
                    <FontAwesomeIcon icon={faTrash}/>
                </DeleteIcon>  
            )}
            
        </TaskItemContainer>
    );
}

export default TaskItem;