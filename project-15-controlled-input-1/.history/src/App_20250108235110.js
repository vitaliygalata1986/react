import './App.css';
import Login from './components/Login';

function App() {
  const submitForm = (data) => {
    console.log(JSON.stringify(data)); // {"username":"nertis44@gmail.com","password":"nertis86"}
    alert('Ваша форма успешно отправленна');
  };
  return (
    <div className='App'>
      <Login submitForm={submitForm} />
    </div>
  );
}

export default App;
