import React, { useState, useEffect } from "react";
import { Button, TaskNameInput, DateInput, TimeInput, Select, TaskInputContainer, Title, DateTimeRow, ToLabel, TextArea } from "./task-input.styles";


const categories = [
    'Work',
    'Personal',
    'School',
    'Health',
    'Shopping',
    'Other'
]

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [notes, setNotes] = useState(''); 
    const [category, setCategory] = useState(categories[0]);


    const setLocalTime = () => {
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
    };

    useEffect(() => {
        setLocalTime();
    }, []);

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
            category,
        });
        setTask('');
        setLocalTime();
        setNotes('');
        setCategory(categories[0]);
    };

    return(
        <TaskInputContainer>
            <Title>Add New Task</Title>
            <form onSubmit={handleSubmit}>
                <TaskNameInput 
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Add new task"
                    required
                />
                <DateTimeRow>
                    <DateInput
                        className="small"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required 
                    />
                     <TimeInput
                        className="small"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required 
                    />
                </DateTimeRow >   
                <DateTimeRow>
                    <ToLabel>To</ToLabel>
                </DateTimeRow>
                <DateTimeRow>
                    <DateInput
                        className="small"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required 
                    />
                
                    <TimeInput
                        className="small"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required 
                    />
                </DateTimeRow>
                <TextArea 
                    type="textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add note"
                />
                
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </Select>


                <Button type="submit">Add Task</Button>
            </form>

        </TaskInputContainer>
    );
}


export default TaskInput;