import { createContext } from 'react';

//const UserContext = createContext('Vitaliy'); // контекст создается с помощью функции createContext
const UserContext = createContext({
  // user: '',
  // setUser: () => {},
  userName: '',
  changeUserName: () => {},
});

export default UserContext;
