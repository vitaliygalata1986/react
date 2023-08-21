import UserContext from '../context/UserContext';
import { useContext } from 'react';

function ChangeUser() {
  const { userName, cnangeUserName } = useContext(UserContext); // хотим воспользоваться определенным контекстом

  function handleFormSubmit(event) {
    event.preventDefault();
    cnangeUserName(event.target.username.value);
  }

  return (
    <>
      <button
        onClick={() =>
          cnangeUserName(userName === 'Vitaliy' ? 'Elena' : 'Vitaliy')
        }
      >
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
