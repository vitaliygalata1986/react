import { useState, useEffect, useRef } from 'react';
import styles from './Login.module.css';

const INITIAL_STATE = {
  username: true,
  password: true,
};

function Login({ submitForm }) {
  // const [username, setUserName] = useState('Your name'); // создадим начальные значения для инпута и пароля - это будет пустая строкиа, и выполним деструк. кот. возвр. метод useState, а он возвр. массив из двух элементов
  // const [password, setPassword] = useState('Your password'); // также начальным значением для пароля будет пустая строка

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  const usernameRef = useRef(); // создали референс элемент с которым будем взаимод.
  const passwordRef = useRef();

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value }); // [text] - динамически создаем свойство внутри объекта
  }

  const focusError = (formValidState) => {
    switch (true) {
      case !formValidState.username:
        usernameRef.current.focus();
        break;
      case !formValidState.password:
        passwordRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!formValidState.username || !formValidState.password) {
      focusError(formValidState);
      timerId = setTimeout(() => {
        // console.log('Очистка эффекта');
        setFormValidState(INITIAL_STATE);
      }, 2000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [formValidState]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    let isFormValid = true; // изначально считаем, что форма валидна

    if (!formProps.username?.trim().length) {
      setFormValidState((state) => ({ ...state, username: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, username: true }));
    }
    if (!formProps.password?.trim().length) {
      setFormValidState((state) => ({ ...state, password: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, password: true }));
    }

    if (!isFormValid) {
      return;
      // если форма не валидна, то return
    }

    submitForm(formProps);
    /*
    setData({
      username: '',
      password: '',
    });
    */
   INITIAL_STATE
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={data.username}
            ref={usernameRef}
            className={`input ${formValidState.username ? '' : styles.invalid}`}
            //onChange={(e) => setUserName(e.target.value)}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            ref={passwordRef}
            value={data.password}
            className={`input ${formValidState.password ? '' : styles.invalid}`}
            onChange={handleInputChange}
          />
        </label>
        <button type="sybmit">Login</button>
      </form>
    </>
  );
}

export default Login;
