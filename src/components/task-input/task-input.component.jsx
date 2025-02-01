import React, { useState } from "react";
import Dropdown from "../dropdown/dropdown.component";

const TaskInput = ({ addTask, cancelTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [frequency, setFrequency] = useState('no repeat');
    const [category, setCategory] = useState('Personal');
    const [notes, setNotes] = useState('');

    const handleAddTask = () => {
        if(task) {
            addTask({task, startDate, endDate, frequency, category, notes});

            setTask('');
            setStartDate('');
            setEndDate('');
            setFrequency('no repeat');
            setCategory('Personal');
            setNotes('');
        }
    }

    const frequencyOptions = ['no repeat', 'daily', 'weekly', 'monthly', 'yearly'];
    const categoryOptions = ['Personal', 'Official'];

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

            <Dropdown 
            label="Frequency"
            options={frequencyOptions}
            selected={frequency}
            setSelected={setFrequency}/>

            <Dropdown 
            label="Category"
            options={categoryOptions}
            selected={category}
            setSelected={setCategory}/>

            <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add note"/>

            <button onClick={handleAddTask}>Save</button>
            <button onClick={cancelTask}>Cancel</button>
        </div>
    );
}

export default TaskInput;