import { useImperativeHandle, useRef } from 'react';

export default function AppInput({ ref }) {
  // console.log(ref.current);
  const inputRef = useRef();

  /*
    useImperativeHandle — это хук React, который позволяет управлять поведением ссылки (ref) 
    и предоставлять кастомный интерфейс для работы с внутренним состоянием или методами компонента.
    Он используется в сочетании с forwardRef, чтобы передать ref из родительского компонента функциональному компоненту.

    useImperativeHandle создаёт кастомное поведение для ref. 
    В данном случае, оно предоставляет метод focus, который вызывает focus() на DOM-элементе <input>.
  */

  /*
    Когда пользователь нажимает на кнопку, вызывается метод focus на объекте ref.current, 
    который перенаправляется к DOM-элементу <input> внутри AppInput.
  */

  /*
    Когда пользователь нажимает кнопку, вызывается обработчик onClick, который обращается к ref.current.focus().
    Это приводит к выполнению настроенного метода focus из компонента <AppInput>, 
    а в свою очередь вызывает метод focus() для элемента <input>
  */

  /*
    Процесс при клике на кнопку:
      1) Клик вызывает функцию, переданную в обработчик onClick.
      2) Эта функция обращается к ref.current, где хранится объект с методами, определёнными в useImperativeHandle.
      3) Вызывается метод focus(), который внутри компонента <AppInput> управляет фокусом текстового поля.
      4) Визуально пользователь видит, как фокус перемещается с кнопки на текстовое поле.
  */

  useImperativeHandle(ref, () => ({
    // ref: Передаваемая ссылка, созданная через React.forwardRef
    // создаётся метод focus, который вызывает focus() на input через его собственный ref (inputRef).
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ''),
  }));

  return (
    <div className='input-field'>
      <input ref={inputRef} />
    </div>
  );
}
