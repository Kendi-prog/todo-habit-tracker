import React, {useState} from "react";

import TaskManagement from "../task-management/task-management.component";
import TaskInput from "../task-input/task-input.component";
import { TodoMainContainer, TaskInputArea, TaskListArea, AnalyticsArea } from "./todo.main.styles";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
  
      const addTask = (newTask) => {
          setTasks([...tasks, { ...newTask, id:Date.now(), completed:false}]);
      }
  
    return(
      <TodoMainContainer>
        <TaskInputArea>
          <TaskInput addTask={addTask}/>
        </TaskInputArea>
        <TaskListArea>
          <TaskManagement tasks={tasks}/>
        </TaskListArea>
        <AnalyticsArea>
          <span>Analytics</span>
        </AnalyticsArea>
      </TodoMainContainer>
        
    );
}

export default ToDo;