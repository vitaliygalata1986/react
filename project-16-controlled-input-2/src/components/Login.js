import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(e, text) {
    setData({ ...data, [text]: e.target.value }); // [text] - динамически создаем свойство внутри объекта
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            // onChange={(e) => setData({ ...data, username: e.target.value })}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>
        <button type="sybmit">Login</button>
      </form>
    </>
  );
}

export default Login;
