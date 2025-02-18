import React, {useState} from "react";

import TaskItem from "../task-item/task-item.component";
import { DateContainer, ListContainer } from "./task-management.styles";
import Calendar from "../calendar/calendar.component";

const TaskManagement = ({ tasks, onDelete, onUpdate, onToggleComplete, editingTask, setEditingTask }
    ) => {
   const [selectedDate, setSelectedDate] = useState(new Date());

   const handleSelectedDate = (date) => {
    setSelectedDate(date);
   }

    return(
        <div>
            <DateContainer>
                <h3>Date:{selectedDate.toDateString()}</h3>
                <Calendar />
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