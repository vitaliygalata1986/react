import { createContext } from 'react';

// const UserContext = createContext('Vitaliy'); // контекст создается с помощью функции createContext
const UserContext = createContext({
  // user: '',
  // setUser: () => {},
  userName: '',
  cnangeUserName: () => {},
}); // контекст создается с помощью функции createContext

export default UserContext;
