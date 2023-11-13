import UserContext from '../context/UserContext';
import { useContext } from 'react';
// import UserName from './UserName';

function UserInfo() {
  const { userName, changeUserName } = useContext(UserContext); // с помощью хука useContext читаем данные их UserContext
  //const user = useContext(UserContext);

  // return <UserName>{(value) => <h1>{value}</h1>}</UserName>;
  return (
    <h1>{userName}</h1>
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    // <UserContext.Consumer>
    //   <h1>Vitaliy</h1>
    // </UserContext.Consumer>
  );
}

export default UserInfo;
