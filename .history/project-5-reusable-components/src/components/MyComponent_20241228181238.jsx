
function MyComponent() {


  return (
    <div>
      <h1>Hello from the reusable component</h1>
      <button>Hello!</button>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}

export default MyComponent;
