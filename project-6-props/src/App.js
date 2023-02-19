import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="1" />
      <PetInfo animal="dog" age="3" />
      <PetInfo animal="dog" age={2} />
    </div>
  );
}

export default App;
