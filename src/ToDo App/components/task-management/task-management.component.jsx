import React from "react";

import TaskItem from "../task-item/task-item.component";

const TaskManagement = ({ tasks, onDelete, onUpdate, onToggleComplete, editingTask, setEditingTask }) => {
   

    return(
        <div>
            <ul>
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
            </ul>
        </div>
    );
}

export default TaskManagement;