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
  // return {
  //   success: true,
  //   errorMessage: 'Some error text',
  //   successMessage: 'Complete successfully!',
  // };
}

function App() {
  const handleSubmit = async (prevState, formData) => {
    // можно на основании предыдщего состояния возвращать новое
    await updateName(name);
  };

  function showSuccess(message) {
    return <div className='alert alert-success mb-3'>{message}</div>;
  }

  const [state, formAction, isPending] = useActionState(handleSubmit, null); // функция обработчик, начальное состояние // возвращает state, formAction, isPending
  // state - то, что вернет функция updateName
  // formAction - то, что вернет useActionState

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
        {state?.success === false && <p>{error.successMessage}</p>}
      </form>
    </>
  );
}

export default App;

// 28-00
