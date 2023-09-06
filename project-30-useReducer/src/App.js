import { useReducer } from 'react';
import './App.css';

const countReducer = (state, { type }) => {
  if (type === 'PLUS') return { count: state.count + 1 };

  if (type === 'MINUS') return { count: state.count - 1 };

  return state;
};

function App() {
  // const [count, setCount] = useState(0);

  const [{ count }, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className="App container">
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: 'PLUS' })}>+</button>
    </div>
  );
}

export default App;
