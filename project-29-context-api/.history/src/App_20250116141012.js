import { useState } from 'react';
import User from './componets/User';
import UserContext from './context/UserContext';
import ChangeUser from './componets/ChangeUser';
import './App.css';

function App() {
  const [user, setUser] = useState('Vitaliy');
  return (
    //<UserContext.Provider value={{ user, setUser }}>
    <>
      <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
        <div className='App'>
          <User />
          <ChangeUser />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
