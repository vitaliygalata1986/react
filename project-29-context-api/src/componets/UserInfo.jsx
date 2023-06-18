import UserContext from '../context/UserContext';
import { useContext } from 'react';
// import UserName from './UserName';

function UserInfo() {
  const { userName: user, cnangeUserName } = useContext(UserContext); // с помощью хука useContext читаем данные их UserContext
  console.log(user); // {user: 'Vitaliy', setUser: ƒ}

  // return <UserName>{(value) => <h1>{value}</h1>}</UserName>;
  return (
    <h1>{user}</h1>
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    // <UserContext.Consumer>
    //   <h1>Vitaliy</h1>
    // </UserContext.Consumer>
  );
}

export default UserInfo;
