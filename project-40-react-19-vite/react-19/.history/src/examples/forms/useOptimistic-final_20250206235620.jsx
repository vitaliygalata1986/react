import { useState, useOptimistic } from 'react';

// useOptimistic
// Хук useOptimistic позволяет показать оптимистичный результат,
// не дожидаясь завершения выполнения action функции обработчика формы
// Как использовать:
//  1) Вызвать внутри компонента, завять его на состояние
//  2) Перед запуском асинхронной функции обновления данных, установить оптимистичное состояние

async function updateName(name) {
  console.log('updateName name:', name);
  console.log('Waiting 2 sec...');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  console.log('updateName COMPLETE');
  return name + '(from server)';
}

function App() {
  const [name, setName] = useState('John');
  const [optimisticState, setOptimisticState] = useOptimistic(name); // первый аргумент - состояние, на которое он будет подвязан

  async function handleSubmit(formData) {
    // устанавливаем оптимистичное состояние на оптимистичный результат перед запуском и выполнении функции updateName()
    setOptimisticState(formData.get('name')); // то имя, которое мы в форме отправили - устанавливаем его на оптимистичное значение
    const newName = await updateName(formData.get('name'));
    setName(newName);
  }

  return (
    <>
      <h2 className='fs-3 mb-5'>
        useOptimistic()
        <small className='fw-lighter'> стартовый код</small>
      </h2>
      <form action={handleSubmit} className='card shadow p-3'>
        <p className='fs-3'>Current name: {optimisticState}</p>
        <label className='form-label'>Enter name</label>
        <input name='name' className='form-control mb-3' />
        <button className='btn btn-dark'>Update</button>
      </form>
    </>
  );
}

export default App;
