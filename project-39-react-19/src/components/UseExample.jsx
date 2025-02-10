import { use } from 'react';

// use - метод

// в fetchUsers будет лежать промис
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
  (r) => r.json()
);

export default function UseExample() {
  const users = use(fetchUsers); // либо закидываем реакт контекст
  return (
    <>
      <ul className='collection'>
        {users.map((user) => (
          <li key={user.id} className='collection-item'>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
