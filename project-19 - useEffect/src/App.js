import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log('Callback in useEffect called');
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('App rendered');
  console.log(todo);
  return (
    <div className="App">
      {todo && (
        <h1>
          {todo.id}.<b>{todo.title}</b>
        </h1>
      )}
    </div>
  );
}

export default App;
