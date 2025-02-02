import React, { use, useState } from "react";
import Dropdown from "../dropdown/dropdown.component";

const TaskInput = ({ addTask, removeTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('10:00');
    // const [frequency, setFrequency] = useState('no repeat');
    // const [category, setCategory] = useState('Personal');
    // const [notes, setNotes] = useState('');

    const handleAddTask = () => {
        if(task && startDate && startTime) {
            const newTask = {
                task, 
                start: `${startDate} ${startTime}`,
                end: `${endDate} ${endTime}`  //frequency, category, notes
            };

            addTask(newTask);
            resetForm();

                // setFrequency('no repeat');
            // setCategory('Personal');
            // setNotes('');
        }
    }

    const resetForm = () => {
        setTask('');
        setStartDate('');
        setEndDate('');
        setStartTime('08:00');
        setEndTime('10:00');
    }

           
        

    // const frequencyOptions = ['no repeat', 'daily', 'weekly', 'monthly', 'yearly'];
    // const categoryOptions = ['Personal', 'Official'];

    return (
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task name"/>

            <label>
                Start Date:
                <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
            </label>

            <label>
                Start Time:
                <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)} />
            </label>

            <label>
                End Date:
                <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)} />
            </label>

            <label>
                End Time:
                <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)} />
            </label>


            {/*<Dropdown 
            label="Frequency"
            options={frequencyOptions}
            selected={frequency}
            setSelected={setFrequency}/>

            <Dropdown 
            label="Category"
            options={categoryOptions}
            selected={category}
            setSelected={setCategory}/> */}

            {/* <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add note"/>*/}

            <button onClick={handleAddTask}>Save</button>
            <button onClick={removeTask}>Cancel</button> 
        </div>
    );
}

export default TaskInput;