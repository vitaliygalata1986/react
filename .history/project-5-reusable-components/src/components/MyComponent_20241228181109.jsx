import { useState } from 'react';

function MyComponent() {
  console.log('Called');
  const [buttonText, setButtonText] = useState('Click me');

  /*
  let buttonText = 'Click me';
  const onButtonClick = () => {
    buttonText = 'Hello form React';
    console.log(buttonText);
  };
  */

  const onButtonClick = () => {
    setButtonText('Hello form React');
  };

  return (
    <div>
      <h1>Hello from the reusable component</h1>
      <button>Hello!</button>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}

export default MyComponent;