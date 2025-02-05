import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!task || !startDate || !endDate){
            alert("Please fill in all fields");
            return;
        }
        addTask({
            task,
            startDate,
            endDate,
        });
        setTask('');
        setStartDate('');
        setEndDate('');
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Add new task"
                    required
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required 
                />
                 <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required 
                />
                <button type="submit">Add Task</button>
            </form>

        </div>
    );
}


export default TaskInput;