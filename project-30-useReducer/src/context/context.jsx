import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ContextAll = createContext();

// некое значение по-умолчанию
const initialState = {
  count: 0,
};

// const initialCount = 0;

/*
function init(initialCount) {
  return { count: initialCount };
}
*/

export const ContextProvider = ({ children }) => {
  // Для этого передадим  функцию init в качестве третьего аргумента
  // Начальное состояние будет установлено равным результату вызова init(initialCount)
  //const [value, dispatch] = useReducer(reducer, initialCount, init); // ленивая инициализация

  const [value, dispatch] = useReducer(reducer, initialState);
  value.minus = (data) => {
    dispatch({ type: 'MINUS', payload: { number: data } });
  };
  value.plus = (data) => {
    dispatch({ type: 'PLUS', payload: { number: data } });
  };
  value.reset = () => {
    dispatch({ type: 'RESET', payload: initialState });
  };

  return <ContextAll.Provider value={value}>{children}</ContextAll.Provider>;
};
