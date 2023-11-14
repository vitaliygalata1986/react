import { useContext } from 'react';
import { ContextAll } from '../context/context';
function Counter() {
  const { count, minus, plus, reset } = useContext(ContextAll);
  return (
    <div>
      <button onClick={() => minus(2)}>-</button>
      {count}
      <button onClick={() => plus(4)}>+</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Counter;
