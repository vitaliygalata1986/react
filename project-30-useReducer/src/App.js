import Counter from './componets/Counter';
import { ContextProvider } from './context/context';
import './App.css';

function App() {
  return (
    <div className="App container">
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
}

export default App;
