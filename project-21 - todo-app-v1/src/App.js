import { useState } from 'react';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    // добавление нового todo
    setTodos([...todos, text]); // возьмем существующие элементы из массива todos и в конце массива добави новый элемент text
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
