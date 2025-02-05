import React, {useState} from "react";

const TaskEditForm = ({ task, onUpdate }) => {
    const [editingText, setEditingText] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(task.id, editingText)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editingText}
                onChange={e => setEditingText(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default TaskEditForm;