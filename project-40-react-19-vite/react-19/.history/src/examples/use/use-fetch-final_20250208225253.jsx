import { useEffect, use } from 'react';
// use - новый API use - этот api позволяет обрабатывать промисы, которые должны быть описаны
// не в компоненте, в котором мы их обрабатываем

const url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = fetch(url).then()

function App() {
  const [users, setUsers] = useState(null);

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
