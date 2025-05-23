import { useState, useTransition } from 'react';

/*
	action функции для обработки форм
  Action функции это “новый тип функций” в react которые даёт новые возможости при обработке форм. 
  Action функция:
    1) Обрабатывает отправку формы, передается в prop action={}
    2) При вызове принимает аргумент fromData с данными отправленной формы
    3) При завершении работы сбрасывает данные формы. Отпадает необходимость создавать контролируемые инпуты
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
  const [isPending, setTransition] = useTransition();
  // isPending состояне ожидания, в режиме ожидания isPending - true, как только получили ответ- false

  const [success, setSuccess] = useState(false);

  // так как handleSubmit - action функция, то она параметром принимает объект formData
  const handleSubmit = (formData) => {
    const name = 
    console.log(formData.get('name')); // получаем value input
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
        useTransition <small className='fw-lighter'>состояние ожидания</small>
      </h2>
      <form action={handleSubmit} className='card shadow p-3'>
        {success && showSuccess()}
        <label className='form-label'>Enter name</label>
        <input className='form-control mb-3' name='name' />
        <button className='btn btn-dark' disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
