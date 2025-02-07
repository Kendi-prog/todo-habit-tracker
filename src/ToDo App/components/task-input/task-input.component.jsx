import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('10:00');
    const [notes, setNotes] = useState(''); 
    const [category, setCategory] = useState('Personal');

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
            startTime,
            endTime,
            notes,
        });
        setTask('');
        setStartDate('');
        setEndDate('');
        setStartTime('08:00');
        setEndTime('10:00');
        setNotes('');
        setCategory('Personal');
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
                 <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required 
                />
                 <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required 
                />
                <input 
                    type="textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <input 
                    type="dropdown"
                    value={category}/>


                <button type="submit">Add Task</button>
            </form>

        </div>
    );
}


export default TaskInput;