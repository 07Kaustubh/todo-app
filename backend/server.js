const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let currentId = 1;

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Get a single task by ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const newTask = { id: currentId++, title, description, status, dueDate };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update an existing task by ID
app.put('/api/tasks/:id', (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
