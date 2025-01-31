import React, { useState } from "react";

const TaskInput = ({ addTask, cancelTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [frequency, setFrequency] = useState('no repeat');
    const [category, setCategory] = useState('');
    const [notes, setNotes] = useState('');

    const handleAddTask = () => {
        if(task) {
            addTask({task, startDate, endDate, frequency, category, notes});

            setTask('');
            setStartDate('');
            setEndDate('');
            setFrequency('');
            setCategory('');
            setNotes('');
        }
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task name"/>

            <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="8:00 am"/>

            <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="10:00 am"/>
        </div>
    );
}

export default TaskInput;