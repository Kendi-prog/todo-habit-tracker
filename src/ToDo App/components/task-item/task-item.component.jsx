import React from "react";
import {faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

import { 
    CompleteTaskIcon, 
    DeleteIcon, 
    HiddenSpace, 
    Icon, 
    TaskContainer, 
    TaskItemContainer, 
    TaskName, 
    TaskStartTime 
} from "./task-item.styles";


const TaskItem = ({ task, onDelete, onToggleComplete }) => 
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
            <CompleteTaskIcon onClick={() => onToggleComplete(task.id)}>
                <Icon 
                    icon={faCheckCircle}
                    style={{  color: task.completed ? 'green' : 'grey'}}/>
            </CompleteTaskIcon>
            {task.completed ? (
                <HiddenSpace />
            ) : (
                <DeleteIcon onClick={() => onDelete(task.id)}> 
                    <Icon icon={faTrash}/>
                </DeleteIcon> 
            )} 
            
        </TaskItemContainer>
    );
}

export default TaskItem;