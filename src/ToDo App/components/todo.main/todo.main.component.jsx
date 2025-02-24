import React, {useEffect, useState} from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

import TaskManagement from "../task-management/task-management.component";
import TaskInput from "../task-input/task-input.component";
import { TodoMainContainer, TaskInputArea, TaskListArea, AnalyticsArea } from "./todo.main.styles";
import TaskCategorySummary from "../task-category-summary/task-category-summary.component";
import db from "../../../utils/firebase";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);


    const addTask = async (newTask) => {
      try {
        const docRef = await addDoc(collection(db, "tasks"), {
          ...newTask,
          completed: false,
          createdAt: new Date()
        });

        console.log("Task added with ID: ", docRef.id);
        fetchTasks();
       
      } catch (e) {
        console.error("Error adding task: ", e);
      }
    }

    const fetchTasks = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, "tasks"));
        const tasksData = querySnapShot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(tasksData);
      } catch (e) {
        console.error("Error fetching tasks: ", e);
      }
    }

    useEffect(() => {
      fetchTasks();
    }, []);

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
          <TaskCategorySummary tasks={tasks}/>
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