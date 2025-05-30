import { useState, useActionState } from 'react';

/*
  useActionState()
	Чтобы упростить общие случаи работы с action функциями, был добавлен новый хук под названием useActionState.
    Как использовать:
     1. Возвращает состояние формы, action функцию, состояние isPending
     2. Принимает функцию для обработки формы, [начальное состояние]
*/

async function updateName() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  console.log('Name updated!');
  return {
    success: true,
    errorMessage: 'Some error text',
    successMessage: 'Complete successfully!',
  };
}

function App() {
  const [state, formAction, isPending] = useActionState(handleSubmit, null); // функция обработчик, начальное состояние // возвращает state, formAction, isPending
  // state - в стейт будет записано то, что вернет функция handleSubmit
  // formAction - должны передать на тег form в props action
  // isPending можем повесить на кнопку, чтобы ее disabled на период отправки формы

  async function handleSubmit(prevState, formData) {
    // можно на основании предыдущего состояния возвращать новое
    return await updateName();
  }

  function showSuccess(message) {
    return <div className='alert alert-success mb-3'>{message}</div>;
  }

  return (
    <>
      <h2 className='fs-3 mb-5'>
        useActionState <small className='fw-lighter'>useActionState()</small>
      </h2>
      <form action={formAction} className='card shadow p-3'>
        {state?.success && showSuccess(state.successMessage)}
        <label className='form-label'>Enter name</label>
        <input className='form-control mb-3' name='name' />
        <button className='btn btn-dark' disabled={isPending}>
          Update
        </button>
        {state?.success === false && <p>{state.successMessage}</p>}
      </form>
    </>
  );
}

export default App;

// 28-00
