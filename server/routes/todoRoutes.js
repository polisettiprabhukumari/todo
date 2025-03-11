const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // Ensure the model file exists

// Get all Todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

module.exports = router;
