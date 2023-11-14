export function reducer(state, action) {
  switch (action.type) {
    case 'MINUS':
      return { count: state.count - action.payload.number };
    case 'PLUS':
      return { count: state.count + action.payload.number };
    default:
      return state;
  }
}
