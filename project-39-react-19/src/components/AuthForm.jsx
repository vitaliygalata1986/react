import { useActionState } from 'react';
import { fakeLogin } from '../api';
import SubmitButton from './SubmitButton';

export default function AuthForm() {
  const [state, submitAction] = useActionState(auth, {
    // 1-й параметр функция, которая будет выполнена, когда мы засабмитим форму
    // 2-й - начальный стейт
    // state - данные с формы
    // submitAction - функция, которую передаем в саму форму
    data: null,
    error: null,
  });

  async function auth(prevState, formData) {
    // prevState - предыдущее состояние этой формы
    // formData - объект, который работает с полями для формы
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fakeLogin({ email, password });
      return { data: response, error: null };
    } catch (e) {
      return { ...prevState, error: e.message };
    }
  }

  // 11-30

  return (
    <form action={submitAction}>
      <div className='input-field'>
        <input id='email' type='email' className='validate' name='email' />
        <label htmlFor='email'>Email</label>
      </div>
      <div className='input-field'>
        <input
          id='password'
          type='password'
          className='validate'
          name='password'
        />
        <label htmlFor='password'>Password</label>
      </div>
      <SubmitButton />
      {state.data && <p>{state.data.email} Logged in</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </form>
  );
}
