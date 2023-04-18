import { useState } from 'react';
import styles from './TodoForm.module.css';
// console.log(styles);

function TodoForm({ addTodo }) {
  const [text, setText] = useState(''); // изначально поле для input пустое, следовательно это пустая строка

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText(''); // обнулить инпут после нажатия на кнопку sybmit
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          type="text"
          placeholder="Enter new Todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
