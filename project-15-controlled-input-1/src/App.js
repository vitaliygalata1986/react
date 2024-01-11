import './App.css';
import Login from './components/Login';

function App() {
  const submitForm = (data) => {
    console.log(data);
    alert('Ваша форма успешно отправленна');
  };
  return (
    <div className="App">
      <Login submitForm={submitForm} />
    </div>
  );
}

export default App;
