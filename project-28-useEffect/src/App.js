import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div className="App">
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Клик</button>
    </div>
  );
}

export default App;
