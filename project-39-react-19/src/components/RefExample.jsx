import { useRef } from 'react';
import AppInput from './AppInput';
export default function RefExample() {
  const ref = useRef();
  return (
    <>
      <AppInput ref={ref} />
      <button className='btn' onClick={() => ref.current.focus()}>
        Focus Input
      </button>
      <button className='btn' onClick={() => ref.current.clear()}>
        Clear Input
      </button>
    </>
  );
}
