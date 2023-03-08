import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const texts = ['Click me', 'Click me please', 'Hit me', 'Press me'];

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} textBtn={text} key={index} />;
      })}
    </div>
  );
}

export default App;
