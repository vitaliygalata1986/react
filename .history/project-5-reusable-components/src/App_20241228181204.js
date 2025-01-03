import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponents';

function App() {
  console.log('Called');
  return (
    <div className='App'>
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
    </div>
  );
}
export default App;
