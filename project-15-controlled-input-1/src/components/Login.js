import { useState } from 'react';

function Login() {
  const [username, setUserName] = useState(''); // создадим начальные значения для инпута и пароля - этобудет пустая строкиа, и выполним деструк. кот. возвр. метод useState, а он возвр. массив из двух элементов
  // userName - это значение, которое вводит польз.
  // setUserName, чтобы менять часть состояния этого компонента

  const [password, setPassword] = useState(''); // также начальным значением для пароля будет пустая строка

  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = {
      // username: username,
      // password: password,
      username, // берем значения из переменной username, которая является частью состояния компонента Login
      password,
    };
    console.log(userData);
    alert(JSON.stringify(userData)); // конвертируем объект в строку, так как alert не может отобразить значения из объекта
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="sybmit">Login</button>
      </form>
    </>
  );
}

export default Login;
