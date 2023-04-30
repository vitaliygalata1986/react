import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // здесь переименовывается v4 на uuidv4
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';
import TodosActions from './components/Todo/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    // добавление нового todo
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    // console.log(newTodo);
    setTodos([...todos, newTodo]); // здесь уже будем передавать newTodo
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted } // если мы нашли задачу, id которой todo.id=== передаваемой в функцию id, то изменим isCompleted с true на false или наоборот
            : // используем spread оператор - разделяем объект на свойства и потом перезаписываем одной из свойств
              { ...todo } // по правилам реакт мы должны создать каждый раз новое состояне объекта при ререндеринге компонента - в итоге мы создаем новый объект из свойств предыдущего объекта, тем самым мы создаем новый объект, а не копируем ссылку на предыдущий объект
      )
    );
  };

  const resetTodoHandler = () => {
    // функция удаления всех задач
    setTodos([]); // для удаления всех задач передаем пустой массив
  };

  const deleteCompletedTodosHandler = () => {
    // функция удаления всех завершенных задач
    setTodos(todos.filter((todo) => !todo.isCompleted)); // все задачи, у которых isCompleted не false
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length; // найдем только завершенные задачи
  // console.log(!!completedTodosCount); // !!0 -> false

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodoHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount} // результат сразу приводим к булеву типу - если задач нет - то !!0 - false, если есть, то !!1 - true
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && ( // если есть завершенные задачи
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
