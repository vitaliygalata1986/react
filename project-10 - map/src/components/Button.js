import matchers from '@testing-library/jest-dom/matchers';

function Button({ onClick, textBtn }) {
  return <button onClick={onClick}>{textBtn}</button>;
}

export default Button;
