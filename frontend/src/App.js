import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then(res => setTodos(res.data));
  }, []);

  const addTodo = (text) => {
    axios.post("http://localhost:5000/todos", { text, completed: false }).then(res => {
      setTodos([...todos, res.data]);
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter(todo => todo._id !== id));
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
