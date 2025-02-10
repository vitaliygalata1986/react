import { useState, useTransition } from 'react';
import { useFormStatus } from 'react-dom';

/*
  useActionState()
	Чтобы упростить общие случаи работы с action функциями, был добавлен новый хук под названием useActionState.
    Как использовать:
     1. Возвращает состояние формы, action функцию, состояние isPending
     2. Принимает функцию для обработки формы, [начальное состояние]
*/

const Btn = () => {
  const { pending, data, method, action } = useFormStatus(); // получаем состояние ожидания
  // console.log(pending);
  if (data) {
    const name = data.get('name');
    // console.log(name);
    if (!name) {
      // console.log('Поле "name" не заполнено!');
    }
  }
  // console.log(method); // get
  // console.log(action); // async (formData) => {...}

  if (data) {
    for (let [key, value] of data.entries()) {
      console.log(key, value); // Логируем каждое поле формы
    }
  }
  return (
    <button className='btn btn-dark' disabled={pending}>
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

  const [success, setSuccess] = useState(false);

  // так как handleSubmit - action функция, то она параметром принимает объект formData
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
        <button className='btn btn-dark' disabled={pending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
