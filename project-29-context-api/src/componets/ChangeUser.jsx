import UserContext from '../context/UserContext';
import { useContext } from 'react';

function ChangeUser() {
  const { userName: user, cnangeUserName: setUser } = useContext(UserContext); // хотим воспользоваться определенным контекстом

  function handleFormSubmit(event) {
    event.preventDefault();
    setUser(event.target.username.value);
  }

  return (
    <>
      <button onClick={() => setUser(user === 'Vitaliy' ? 'Elena' : 'Vitaliy')}>
        Change name
      </button>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <button type="sybmit">Cnage Name</button>
      </form>
    </>
  );
}

export default ChangeUser;
