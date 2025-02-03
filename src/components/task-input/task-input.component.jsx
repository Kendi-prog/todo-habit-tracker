import React, { useState } from "react";

import Dropdown from "../dropdown/dropdown.component";
import './task-input.styles.scss';

const TaskInput = ({ addTask, removeTask, personalCount, officialCount }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('10:00');
    const [frequency, setFrequency] = useState('no repeat');
    const [category, setCategory] = useState('Personal');
    const [notes, setNotes] = useState('');

    const handleAddTask = () => {
        if(task && startDate && startTime) {
            const newTask = {
                task, 
                start: `${startDate} ${startTime}`,
                end: `${endDate} ${endTime}`,
                frequency,
                category,
                notes,
            };

            addTask(newTask);
            resetForm(); 
        }
    }

    const resetForm = () => {
        setTask('');
        setStartDate('');
        setEndDate('');
        setStartTime('08:00');
        setEndTime('10:00');
        setFrequency('no repeat');
        setCategory('Personal');
        setNotes('');
    }

           
    const frequencyOptions = ['no repeat', 'daily', 'weekly', 'monthly', 'yearly'];
    //const categoryOptions = ['Personal', 'Official'];

    return (
        <div className="task-input">
            <div className="category-counts">
                <div className="category-box">
                    <h3>Personal</h3>
                    <p>{personalCount} </p>
                </div>
                <div className="category-box">
                    <h3>Official</h3>
                    <p>{officialCount} </p>
                </div>
            </div>
            <div className="pinned-tasks">
                <Dropdown 
                options={frequencyOptions}
                selected={frequency}
                setSelected={setFrequency}
                />

                <span>Pinned</span>
            </div>
            <div className="input-area">
                <h2>Add new task</h2>
                <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Task name"
                />

                <div className="date-time">
                    <label>
                        Start Date:
                        <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </label>
                    <label>
                        Start Time:
                        <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)} 
                        />
                    </label>
                </div>
                <p className="to-text">To</p>
                <div className="date-time">
                    <label>
                        End Date:
                        <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)} 
                        />
                    </label>
                    <label>
                        End Time:
                        <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                        type="radio"
                        value="Personal"
                        checked={category === 'Personal'}
                        onChange={() => setCategory('Personal')}
                        />
                        Personal
                    </label>
                    <label>
                        <input 
                        type="radio"
                        value="Official"
                        checked={category === 'Official'}
                        onChange={() => setCategory('Official')}
                        />
                        Official
                    </label>
                </div>

                <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add note"
                    />

                <button className="save-button" onClick={handleAddTask}>Save</button>
                <button className="cancel-button" onClick={removeTask}>Cancel</button> 
            </div>    
        </div>
    );
}

export default TaskInput;