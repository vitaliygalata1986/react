import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponents';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
    </div>
  );
}
export default App;
