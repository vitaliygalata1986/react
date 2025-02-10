import { createContext, useState } from 'react';

//const UserContext = createContext('Vitaliy'); // контекст создается с помощью функции createContext
const UserContext = createContext({
  // user: '',
  // setUser: () => {},
  userName: '',
  changeUserName: () => {},
});

// чтобы setUser изменял значение user, нужно использовать хук useState в провайдере контекста
export const UserProvider = ({ children }) => {
  const [userName, changeUserName] = useState('Vitaliy');

  return (
    <UserContext.Provider value={{ userName, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
