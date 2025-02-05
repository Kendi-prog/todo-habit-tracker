import React, { useState } from "react";

import TaskInput from "../task-input/task-input.component";

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id:Date.now(), isCompleted:false}]);
    }

    return(
        <div>
            <TaskInput addTask={addTask}/>
            <ul>
                {tasks.map( task => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManagement;