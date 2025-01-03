import './App.css';
import { useState } from 'react';

import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponents';

function App() {
  console.log('Called');

  const [buttonText, setButtonText] = useState('Click me');

  // /*
  // let buttonText = 'Click me';
  // const onButtonClick = () => {
  //   buttonText = 'Hello form React';
  //   console.log(buttonText);
  // };
  // */

  // const onButtonClick = () => {
  //   setButtonText('Hello form React');
  // };

  return (
    <div className='App'>
      <button onClick={onButtonClick}>{buttonText}</button>
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
    </div>
  );
}
export default App;
