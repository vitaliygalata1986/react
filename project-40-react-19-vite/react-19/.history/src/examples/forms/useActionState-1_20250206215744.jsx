import { useState, useActionState } from 'react';

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return "Couldn't add to cart: the item is sold out.";
  }
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
        {state?.success === false && <p>{state.errorMessage}</p>}
      </form>
    </>
  );
}

export default App;

// 28-00
