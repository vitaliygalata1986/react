import matchers from '@testing-library/jest-dom/matchers';
import { useState } from 'react'; // используем фигурные скобки, так как это не экспорт по умолчанию из реакт (внешний npm пакет)
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
  console.log('rendered');
  // const { maxNum } = props;
  // console.log(maxNum);
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum)); // передаем начально значение
  // randomNum будет содержать случайное число и мы будем его менять в процессе жизненного цикла компонента RandomNumber
  // функцию setRandomNum мы будем вызвать для измегнения случайного числа в момент нажатия на кнопку

  const changeRandom = () => {
    // так как это не компонент реакт, то используем c.case
    // внутри этой функции изменяем состояние компонента RandomNumber
    setRandomNum(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandom}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
