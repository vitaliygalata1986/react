import { useState, MouseEvent } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    // MouseEvent - синтетическое событие, и вся типизация этих событий лежит напрямую в реакт
    console.log(e);
  };

  return (
    <>
      <Button className="btn" onClick={addCounter} type="button">
        Кнопка
      </Button>
    </>
  );
}

export default App;
