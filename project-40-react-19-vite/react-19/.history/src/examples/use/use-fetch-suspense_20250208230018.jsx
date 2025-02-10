import { use } from 'react';
// use - новый API use - этот api позволяет обрабатывать промисы, которые должны быть описаны
// не в компоненте, в котором мы их обрабатываем

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = new Promise(resolve, reject) => {
  fetch(url)
    .then(res => res.json())
    .then(data => 
}

// const getUsers = fetch(url).then((res) => res.json()); // должен возвращать пропис, getUsers пишем за пределами компонента

function App() {
  let users = use(getUsers);
  return (
    <>
      <h2 className='fs-3 mb-5'>
        use() <small className='fw-lighter'>fetching data</small>
      </h2>
      <ul>
        {users && users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
