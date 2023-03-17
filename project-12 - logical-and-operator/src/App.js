import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ResetBtn from './components/ResetBtn';

function App() {
  const [count, setCount] = useState(0);

  // const btnStyle = { backgroundColor: 'lightgreen' };

  const resetCounter = () => {
    setCount(0);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && <ResetBtn onClick={resetCounter} />}
    </div>
  );
}

export default App;
