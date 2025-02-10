import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus(); // useFormStatus - отслеживает - в каком статусе находится сама форма
  // pending - если форма загружается, то мы можем это отследить (даже находясь в дочернем компоненте)
  console.log(method); // get
  return (
    <button className='btn' type='submit' disabled={pending}>
      {pending ? 'Loading ...' : 'Submit'}
    </button>
  );
}

export default SubmitButton;
