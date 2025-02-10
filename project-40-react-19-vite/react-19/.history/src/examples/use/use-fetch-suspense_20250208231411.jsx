import { use, Suspense } from 'react';
// use - новый API use - этот api позволяет обрабатывать промисы, которые должны быть описаны
// не в компоненте, в котором мы их обрабатываем
// Suspense обрабатывает ожидание вложенных компонентов

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = new Promise((resolve, reject) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => resolve(data), 2000);
    })
    .catch(reject);
});

function showUsers() {
  return (
    <>
    <></>
      <ul>
        {users && users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </>
  );
}

function App() {
  let users = use(getUsers);
  return (
    <>
      <h2 className='fs-3 mb-5'>
        use() <small className='fw-lighter'>fetching data</small>
      </h2>
      <Suspense>
        <ul>
          {users &&
            users.map((user, index) => <li key={index}>{user.name}</li>)}
        </ul>
      </Suspense>
    </>
  );
}

export default App;
