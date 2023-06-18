import { useState } from 'react';
import User from './componets/User';
import UserContext from './context/UserContext';
import ChangeUser from './componets/ChangeUser';
import './App.css';

function App() {
  const [user, setUser] = useState('Vitaliy');
  return (
    <UserContext.Provider value={{ userName: user, cnangeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
