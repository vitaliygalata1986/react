import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Button';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);

  return (
    <div className='container'>
      <h1 className='fs-4 mb-1 text-body-tertiary'>Обновления React 19</h1>
      <Component />
    </div>
  );
}

export default App;
