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
}

function App() {
  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const [] = useActionState(handleSubmit, null); // функция обработчик, начальное состояние // возвращает state, formAction, pending

  const handleSubmit = async (formData) => {
    const name = formData.get('name');

    const error = await updateName(name);

    if (error) {
      setError(error);
      return;
    }
    setSuccess(true);
  };

  function showSuccess() {
    return <div className='alert alert-success mb-3'>Form submited!</div>;
  }

  return (
    <>
      <h2 className='fs-3 mb-5'>
        useActionState <small className='fw-lighter'>useActionState()</small>
      </h2>
      <form action={handleSubmit} className='card shadow p-3'>
        {success && showSuccess()}
        <label className='form-label'>Enter name</label>
        <input className='form-control mb-3' name='name' />
        <button className='btn btn-dark'>Update</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
