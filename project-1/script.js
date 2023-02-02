const App = ({ initialButtonText, initialButtonClass } = props) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonClass, setButtonClass] = React.useState(initialButtonClass);
  const onButtonClick = () => {
    setButtonText('Hello form React');
    setButtonClass('greet-btn');
  };
  return (
    <div className="app">
      <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
  <App initialButtonClass="red" initialButtonText="Click me please" />
);
