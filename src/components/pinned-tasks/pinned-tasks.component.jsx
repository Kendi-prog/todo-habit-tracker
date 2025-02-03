import React, { useState } from "react";

import Dropdown from "../dropdown/dropdown.component";

const PinnedTasks = ({ pinnedTasks}) => {
    const [selectFrequency, setSelectFrequency] = useState('');

    const handleFrequencyChange = (e) => {
        setSelectFrequency(e.target.value);
    }

    const filteredTasks = selectFrequency
        ? pinnedTasks.filter(task => task.frequency === selectFrequency)
        : pinnedTasks;

    const frequencyOptions = ["All", "Weekly", "Monthly"];
        
    return (
        <div>
            <h2>Pinned</h2>
            <Dropdown 
            label="Filter by frequency"
            options={frequencyOptions}
            selected={selectFrequency}
            setSelected={setSelectFrequency}
            />

            <ul>
                {Array.isArray(filteredTasks) && filteredTasks.length > 0 ? (
                    filteredTasks.map((task, index) => (
                        <li key={index}>{task.task} (Frequency: {task.frequency})</li>
                    ))
                ) : (
                    <li>No pinned tasks available.</li>
                )}
            </ul>
        </div>
    );
}

export default PinnedTasks;