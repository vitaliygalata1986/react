import { useState, useTransition } from 'react';

/*
	action функции для обработки форм
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
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [isPending, setTransition] = useTransition();
  // isPending состояне ожидания, в режиме ожидания isPending - true, как только получили ответ- false
  // setTransition - функция, которую нужно запустить и передать ей обработчик
  // setTransition сам поменяет isPending на true/false

  const [success, setSuccess] = useState(false);

  // так как handleSubmit - action функция, то она параметром принимает объект formData
  const handleSubmit = (formData) => {
    console.log(formData.get('name')); // получаем value input
    // setTransition(async () => {
    //   const error = await updateName(name);
    //   if (error) {
    //     setError(error);
    //     return;
    //   }
    //   setSuccess(true);
    //   setName('');
    // });
  };

  function showSuccess() {
    return <div className='alert alert-success mb-3'>Form submited!</div>;
  }

  return (
    <>
      <h2 className='fs-3 mb-5'>
        useTransition <small className='fw-lighter'>состояние ожидания</small>
      </h2>
      <form action={handleSubmit} className='card shadow p-3'>
        {success && showSuccess()}
        <label className='form-label'>Enter name</label>
        <input
          className='form-control mb-3'
          value={name}
          name='name'
          onChange={(event) => setName(event.target.value)}
        />
        <button className='btn btn-dark' disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
