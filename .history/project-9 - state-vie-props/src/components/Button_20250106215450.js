import matchers from '@testing-library/jest-dom/matchers';

/*
function Button({ count, onClick }) {
  return <button onClick={() => onClick(count + 1)}>Click me</button>; // берем текущее значение счетчика count, и увеличиваем на + 1
}
*/

function Button({ onClickButton }) {
  // console.log('Button rendering');
  return <button onClick={onClick}>Click me</button>; // мы просто передаем одну функцию в компонент Button и по клику ее вызываем
}

export default Button;
