import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task){
            addTask({ task });
            setTask('');
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Add new task"
                />
                <button type="submit">Add Task</button>
            </form>

        </div>
    );
}


export default TaskInput;