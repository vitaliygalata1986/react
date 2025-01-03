function MyComponent() {


  
  let buttonText = 'Click me';
  const onButtonClick = () => {
    buttonText = 'Hello form React';
    console.log(buttonText);
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
