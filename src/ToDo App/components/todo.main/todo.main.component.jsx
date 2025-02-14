import React, {useState} from "react";

import TaskManagement from "../task-management/task-management.component";
import TaskInput from "../task-input/task-input.component";
import { TodoMainContainer, TaskInputArea, TaskListArea, AnalyticsArea } from "./todo.main.styles";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id:Date.now(), completed:false}]);
      }

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    }

    const updateTask = (id, updatedTask) => {
      setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
      setEditingTask(null);
    };

    const toggleTaskCompletion = (id) => {
      setTasks(tasks.map(task => (
          task.id === id ? (
              {...task, completed: !task.completed}
          ) : task
      )));
    }

    return(
      <TodoMainContainer>
        <TaskInputArea>
          <TaskInput addTask={addTask}/>
        </TaskInputArea>
        <TaskListArea>
          <TaskManagement 
            tasks={tasks}
            onDelete={deleteTask}
            onUpdate={updateTask}
            onToggleComplete={toggleTaskCompletion}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        </TaskListArea>
        <AnalyticsArea>
          <span>Analytics</span>
        </AnalyticsArea>
      </TodoMainContainer>
        
    );
}

export default ToDo;