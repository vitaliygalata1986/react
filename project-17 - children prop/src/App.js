import './App.css';
import Wrapper from './components/wrapper.js';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the wrapper</h2>
        <button>Click</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="value" />
      </Wrapper>
    </div>
  );
}

export default App;
