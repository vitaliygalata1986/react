import { useState } from 'react';
import { useEffect } from 'react';
import './app.css';

const data = [
  {
    id: 1,
    title: 'Лейндинг',
    price: 20000,
    subselectors: [
      {
        id: 1,
        title: 'Настройка рекламы',
        price: 10000,
      },
      {
        id: 2,
        title: 'Настройка SEO',
        price: 15000,
      },
    ],
  },
  {
    id: 2,
    title: 'Интернет магазин',
    price: 50000,
    subselectors: [
      {
        id: 1,
        title: 'Настройка рекламы',
        price: 30000,
      },
      {
        id: 2,
        title: 'Настройка SEO',
        price: 55000,
      },
    ],
  },
];

export function App() {
  const [pickedSelectorIds, setpickedSelectorIds] = useState([]); // список id селекторов, которые были нажаты
  const [pickedSubSelectorIds, setpickedSubSelectorIds] = useState([]);
  const [summ, setSumm] = useState(0); // сумма калькулятора

  const onSelectorClick = (selector) => {
    setpickedSelectorIds([]); // очищаем массив - т.е. родительский селектор можно выбрать только один раз, т.е. расчет будет по одному, дочерние - несколько раз
    setpickedSubSelectorIds([]); // очищаем массив при нажатии на подселектор

    setSumm(selector.price);
    setpickedSelectorIds((prevState) => [...prevState, selector.id]); // prevState - это то, что лежит в pickedSelectorIds в самом начале
  };

  const pikedSelectorClass = (selector) => {
    // проверяем - выбран ли селектор
    const selectorPicked = Boolean(
      pickedSelectorIds.find((id) => id === selector.id)
    );
    if (!selectorPicked) {
      // если селектор не выбран, то вернем пустую строчку
      return '';
    }
    return 'selector-selected'; // если селектор выбран, то ему добавится такой клас
  };

  const pikedSubSelectorClass = (subselector) => {
    // проверяем - выбран ли селектор
    const selectorPicked = Boolean(
      pickedSubSelectorIds.find((id) => id === subselector.id)
    );
    if (!selectorPicked) {
      // если селектор не выбран, то вернем пустую строчку
      return '';
    }
    return 'subselector-selected'; // если селектор выбран, то ему добавится такой клас
  };

  const activeSubSelectorClass = (selector) => {
    const selectorPicked = Boolean(
      pickedSelectorIds.find((id) => id === selector.id)
    );
    if (!selectorPicked) {
      return '';
    }

    return 'subselectors-show';
  };

  // useEffect(() => {
  //   console.log('pickedSelectorIds', pickedSelectorIds);
  // }, [pickedSelectorIds]);

  // useEffect(() => {
  //   console.log('pickedSubSelectorIds', pickedSubSelectorIds);
  // }, [pickedSubSelectorIds]);

  const onSubSelectorClick = (subselector) => {
    // проверим - выбран ли дочерний селектор уже до этого
    const subselectorPicked = Boolean(
      pickedSubSelectorIds.find((p) => p === subselector.id) // если мы найдем в массиве id-шник выбранного селектора, значит он уже был выбран раннее
    );

    if (!subselectorPicked) {
      setpickedSubSelectorIds((prevState) => [...prevState, subselector.id]);

      // если дочерний селектор не был выбран, то выберим его - имеется ввиду прибавить к общей сумме стоимость подселектора
      setSumm((prevState) => prevState + subselector.price); // прибавим к общей сумме стоимость подселектора
    } else {
      // удалим его id из массива выбранных подселекторов
      setpickedSubSelectorIds((prevState) => [
        ...prevState.filter((p) => p !== subselector.id),
      ]); // оставим только те элементы, которые не соответстуют текущему id-ку
      setSumm((prevState) => prevState - subselector.price);
    }
  };

  return (
    <>
      <h1 className="title">Калькулятор стоимости проекта</h1>
      <p className="subtitle">Узнать стоимость вашего проекта</p>

      <div className="selectors">
        {data.map((selector) => {
          return (
            <div key={selector.id} className="selector-item">
              <div
                onClick={() => onSelectorClick(selector)}
                className={`selector-title selector-text ${pikedSelectorClass(
                  selector
                )}`}
              >
                {selector.title}
              </div>
              <div
                className={`subselectors ${activeSubSelectorClass(selector)}`}
              >
                {selector.subselectors.map((subselector) => {
                  return (
                    <div
                      key={subselector.id}
                      onClick={() => onSubSelectorClick(subselector)}
                      className={`selector-subtitle subselector-text ${pikedSubSelectorClass(
                        selector
                      )}`}
                    >
                      {subselector.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="summ">Итого {summ} грв.</div>
      </div>
    </>
  );
}
