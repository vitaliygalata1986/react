export function reducer(state, { type, payload }) {
  // принимает state, object, object это { type, payload }, сразу этот объект деструктуризируем
  console.log(state); // {count: 0, minus: ƒ, plus: ƒ}
  console.log(type); // PLUS / MINUS
  console.log(payload); // {number:4} / {number:2}
  switch (type) {
    case 'MINUS':
      return { count: state.count - payload.number };
    case 'PLUS':
      return { count: state.count + payload.number };
    case 'RESET':
      return { count: payload.count };
    default:
      return state;
  }
}
