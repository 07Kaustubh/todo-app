import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const resetEditing = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Task List</h1>
      <button onClick={() => setEditingTask({})}>New Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status} - {new Date(task.dueDate).toLocaleDateString()}
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingTask && (
        <TaskForm task={editingTask} resetEditing={resetEditing} fetchTasks={fetchTasks} />
      )}
    </div>
  );
};

export default TaskList;
