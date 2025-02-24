import React, {useState} from "react";

import TaskItem from "../task-item/task-item.component";
import { 
    DateContainer, 
    ListContainer, 
    Title, 
    NoTasksWrapper, 
    CalendarContainer 
} from "./task-management.styles";
import Calendar from "../calendar/calendar.component";
import task2 from "../../../assets/task2.jpeg";

const TaskManagement = ({ tasks, onDelete, onUpdate, onToggleComplete, editingTask, setEditingTask }
    ) => {
   const [selectedDate, setSelectedDate] = useState(new Date());

   const handleSelectedDate = (date) => {
    setSelectedDate(date);
   }

    return(
        <div>
            <DateContainer>
                <span>Today's Schedule</span>
                <span>{selectedDate.toDateString()}</span> 
            </DateContainer>
            <CalendarContainer>
                <Calendar onDateSelect={handleSelectedDate}/>
            </CalendarContainer>
            <ListContainer>
                {tasks.length > 0 && <Title>Task</Title>}
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
                            <NoTasksWrapper>
                                <img src={task2} alt="No tasks available" />
                                <p>No Tasks Available</p>
                            </NoTasksWrapper>
                    )}
            </ListContainer>
        </div>
    );
}

export default TaskManagement;