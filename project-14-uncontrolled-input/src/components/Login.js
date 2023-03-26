function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    //console.log(event.target.username.value);
    //console.log(event.target.password.value);
    // console.log({
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    // });
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
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
          <input type="text" name="username" />
        </label>
        <label>
          Username:
          <input type="password" name="password" />
        </label>
        <button type="sybmit">Login</button>
      </form>
    </>
  );
}

export default Login;
