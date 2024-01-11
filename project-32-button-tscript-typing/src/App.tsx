import { useState } from 'react';
import './App.css';
//import { ButtonAlt } from './components/Button/Button';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button className="btn" onClick={() => console.log(1)}>
        Кнопка
      </Button>
    </>
  );
}

export default App;
