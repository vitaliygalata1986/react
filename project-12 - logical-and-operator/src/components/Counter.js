import matchers from '@testing-library/jest-dom/matchers';

function Counter({ count }) {
  // console.log('Counter rendering');
  return <h1 className="h1">Total clicks: {count}</h1>;
}

export default Counter;
