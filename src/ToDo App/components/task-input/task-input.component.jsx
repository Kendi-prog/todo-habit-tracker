import React, { useState, useEffect } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [notes, setNotes] = useState(''); 
    const [category, setCategory] = useState('');


    useEffect(() => {
        const currentTime = new Date();
        const currentLocalStartDate = currentTime.toISOString().split('T')[0];
        const currentLocalStartTime = currentTime.toTimeString().split(' ')[0].slice(0, 5);

        setStartDate(currentLocalStartDate);
        setStartTime(currentLocalStartTime);

        const endDate = new Date(currentTime.getTime() + 2 * 60 * 60 * 1000);
        const endFormattedDate = endDate.toISOString().split('T')[0];
        const endFormattedTime = endDate.toTimeString().split(' ')[0].slice(0, 5);

        setEndDate(endFormattedDate);
        setEndTime(endFormattedTime);
    },[]);

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
        setStartTime('');
        setEndTime('');
        setNotes('');
        setCategory('');
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