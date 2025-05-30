import { useState } from 'react'; // используем фигурные скобки, так как это не экспорт по умолчанию из реакт (внешний npm пакет)
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  // console.log('App rendering');
  const [count, setCount] = useState(0); // в реакте принято называть функцию, которая будет менять состояние компонента через set
  //console.log(count);//1
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count); //0
  };

  return (
    <div className='App'>
      <Counter count={count} />
      <Button onClickButton={incrementCount} />
      <Button onClickButton={incrementCount} />
      <Button onClickButton={incrementCount} />
      <Button onClickButton={incrementCount} />
    </div>
  );
}

export default App;
