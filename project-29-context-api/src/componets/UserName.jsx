function UserName(props) {
  console.log(props);
  return props.children('Vitaliy'); // передаем в функцию один параметр
}

export default UserName;
