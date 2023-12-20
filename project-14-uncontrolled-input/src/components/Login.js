function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    //console.log(event.target.username.value);
    //console.log(event.target.password.value);
    // console.log({
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    // });

    /*
      const userData = {
        username: event.target.username.value,
        password: event.target.password.value,
      };
      console.log(userData); // {username: 'nertis44@gmail.com', password: 'nertis86'}
    */

    // console.log(JSON.stringify(userData));
    // alert(JSON.stringify(userData)); // конвертируем объект в строку, так как alert не может отобразить значения из объекта

    const formData = new FormData(event.target);
    console.log(formData);
    for (const [name, value] of formData) {
      console.log('name =>', name, 'value =>', value); // name => username value => nertis44@gmail.com  // name => password value => nertis86
    }
    const data = Object.fromEntries(formData);
    console.log(data); // {username: 'nertis44@gmail.com', password: 'nertis86'}
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
