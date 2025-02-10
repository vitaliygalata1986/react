import { useState, useTransition } from 'react';
import { useFormStatus } from 'react-dom';

/*
  useFormStatus()
	Хук useFormStatus может использоваться в дочернем компоненте который вызывается внутри тега form, 
  который обрабатывается action функцией.
  Хук useFormStatus позволяет получить доступ к состоянию, данным формы, методу отправки и ссылку на функцию action.

  Как использовать:
    1) Импорт из react-dom
    2) Вызывать в дочернем компоненте формы
    3) Форма должна обрабатываться action функцие
*/

const Btn = () => {
  useFormStatus()
  return (
    <button className='btn btn-dark' disabled={isPending}>
      Update
    </button>
  );
};

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
  const [isPending, setTransition] = useTransition();

  const [success, setSuccess] = useState(false);

  // так как handleSubmit - action функция, то она параметром принимает объект formData
  const handleSubmit = (formData) => {
    const name = formData.get('name');
    console.log(name); // получаем value input
    setTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      setSuccess(true);
    });
  };

  function showSuccess() {
    return <div className='alert alert-success mb-3'>Form submited!</div>;
  }

  return (
    <>
      <h2 className='fs-3 mb-5'>
        Action функция <small className='fw-lighter'>useFormStatus()</small>
      </h2>
      <form action={handleSubmit} className='card shadow p-3'>
        {success && showSuccess()}
        <label className='form-label'>Enter name</label>
        <input className='form-control mb-3' name='name' />
        <Btn />
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
