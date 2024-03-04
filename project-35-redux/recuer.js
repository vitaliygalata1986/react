// создадим редюсер, а состояние будет в виде массива
const initialState = [];

// payload - это будет простро строка

/*
function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    // вернем новое состояние, сформированного на основании текущего состояния и действия
    return [...state, action.payload]; // разделяем текущий массив стейт на элементы и далее в этот массив добавляем action.payload
  }
  if (action.type === 'DELETE_NAME') {
    // filter не изменяет текущий массив, а возвращает новый
    return state.filter((personName) => personName !== action.payload);
  }
  if (action.type === 'CLEAR_NAMES') {
    return [];
  }
  // если тип действия не ADD_NAME, то на текущем этапе мы будем вовзращать текущее состояние
  return state;
}
*/

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload);
    case 'CLEAR_NAMES':
      return [];
    default:
      return state;
  }
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Bogdan' });
console.log(newState);
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' });
console.log(newState);
newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Alice' });
console.log(newState);
newState = reducer(newState, { type: 'CLEAR_NAMES' });
console.log(newState);
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Viyaliy' });

console.log(newState);
