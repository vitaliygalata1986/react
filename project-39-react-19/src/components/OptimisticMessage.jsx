import { useRef, useState, useOptimistic } from 'react';

async function sendMessage(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}

export default function OptimisticMessage() {
  const formRef = useRef();
  // console.log(formRef); // {current: form}
  const [messages, setMessages] = useState([]);
  // console.log(messages);
  // {text: 'task 1', pending: false}
  // {text: 'task 2', pending: false}

  // в useOptimistic передаем сам стейт messages
  // вторым параметром передаем коллбек, где получаем предыдущее состояние сообщений, и новое, которое мы пытаемся добавить
  // [optimisticMessages, addOptimisticMessages] - кортеж из двух элементов
  // useOptimistic - позволяет к примеру добавить оптимистичный элемент в список, который еще не подтвердился с сервера, что он был добавлен
  // при этом мы будем показывать пользователю, что работа идет
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (prevMessages, newMessage) => {
      // возвращаем новый стейт
      return [...prevMessages, { text: newMessage, pending: true }]; // добавляем предыдущее сообщение и добавляем новое оптимистичное сообщение
    }
  );

  async function formAction(formData) {
    addOptimisticMessage(formData.get('message')); // вызовем в тот момент, когда еще не отправили данные на сервер - тоесть у нас только сейчас формируется запрос
    formRef.current.reset(); // reset form after submit
    const message = await sendMessage(formData.get('message'));
    setMessages((messages) => [...messages, { text: message, pending: false }]);
  }
  return (
    <form ref={formRef} action={formAction}>
      <div className='input-field'>
        <input name='message' />
      </div>
      <button type='submit' className='btn'>
        Send
      </button>
      {
        <ul className='collection'>
          {optimisticMessages.map((message, i) => (
            <li className='collection-item' key={i}>
              {message.text} {message.pending && <small>(Adding)</small>}
            </li>
          ))}
        </ul>
      }
    </form>
  );
}
