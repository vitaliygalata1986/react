import { useState } from 'react';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <Input type="text" placeholder="enter your text" />
      <Input type="email" placeholder="enter your email" isValid={true} />
    </>
  );
}

export default App;
