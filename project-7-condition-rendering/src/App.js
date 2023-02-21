import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="1" hasPet />
      <PetInfo animal="dog" age="3" hasPet={false} />
    </div>
  );
}

export default App;
