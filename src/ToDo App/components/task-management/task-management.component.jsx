import React from "react";

import TaskItem from "../task-item/task-item.component";
import { DateContainer, ListContainer } from "./task-management.styles";

const TaskManagement = ({ tasks, onDelete, onUpdate, onToggleComplete, editingTask, setEditingTask }) => {
   

    return(
        <div>
            <DateContainer>
                <h3>Date</h3>
            </DateContainer>
            <ListContainer>
                {tasks.length > 0 ? (
                    tasks.map( task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onEdit={onUpdate}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                        isEditing={editingTask && editingTask.id === task.id}
                        setEditingTask={setEditingTask}/> 
                    
                    ))) : (
                        <li>No Tasks Available</li>
                    )}
            </ListContainer>
        </div>
    );
}

export default TaskManagement;