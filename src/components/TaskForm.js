import React, { useState } from 'react';
import axios from '../axiosConfig';

const TaskForm = ({ task, resetEditing, fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: task.title || '',
    description: task.description || '',
    status: task.status || 'pending',
    dueDate: task.dueDate || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task.id) {
        await axios.put(`/tasks/${task.id}`, formData);
      } else {
        await axios.post('/tasks', formData);
      }
      fetchTasks();
      resetEditing();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task.id ? 'Edit Task' : 'New Task'}</h2>
      <label>
        Title:
        <input name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Due Date:
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={resetEditing}>Cancel</button>
    </form>
  );
};

export default TaskForm;
