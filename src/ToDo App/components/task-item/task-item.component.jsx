import React from "react";
import {faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

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
                <TaskName>
                    {task.task}
                </TaskName>
                <p><strong>Notes:</strong>{task.notes}</p>
            </TaskContainer>
            <CompleteTaskIcon completed={task.completed} onClick={() => onToggleComplete(task.id)}>
                <IoCheckmarkDoneCircleOutline />
            </CompleteTaskIcon>
            {task.completed ? (
                <HiddenSpace />
            ) : (
                <DeleteIcon completed={task.completed} onClick={() => onDelete(task.id)}> 
                    <MdOutlineCancel />
                </DeleteIcon> 
            )} 
            
        </TaskItemContainer>
    );
}

export default TaskItem;