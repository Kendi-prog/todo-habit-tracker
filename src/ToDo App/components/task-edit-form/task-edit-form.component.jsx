import React, { useState } from 'react';

const categories = [
    'Work',
    'Personal',
    'Shopping',
    'Health',
    'Education',
    'Other'
];

const TaskEdit = ({ task, onUpdate }) => {
    const [taskName, setTaskName] = useState(task.task);
    const [startDate, setStartDate] = useState(task.startDate);
    const [startTime, setStartTime] = useState(task.startTime);
    const [endDate, setEndDate] = useState(task.endDate);
    const [endTime, setEndTime] = useState(task.endTime);
    const [notes, setNotes] = useState(task.notes);
    const [category, setCategory] = useState(task.category);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(task.id, {
            task: taskName,
            startDate,
            startTime,
            endDate,
            endTime,
            notes,
            category
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                required 
            />
            <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                required 
            />
            <input 
                type="time" 
                value={startTime} 
                onChange={(e) => setStartTime(e.target.value)} 
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
                value={endTime} 
                onChange={(e) => setEndTime(e.target.value)} 
                required 
            />
            <textarea 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                required 
            />
            <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required
            >
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default TaskEdit;