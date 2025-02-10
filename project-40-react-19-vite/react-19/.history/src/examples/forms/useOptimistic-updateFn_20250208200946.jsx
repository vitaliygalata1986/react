import { useOptimistic, useState, useRef } from 'react';

async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 4000));
  return message;
}

function Thread({ messages, sendMessage }) {
  const formRef = useRef();

  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    await sendMessage(formData);
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
	// когда мы запустим addOptimisticMessage - запустится функция u
    messages,
    (state, newMessage) => [ // эта функция будет устанавливать новое оптимистичное состояние, позволяя использовать предыдущее
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index} className='mb-1'>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type='text'
          name='message'
          placeholder='Hello!'
          className='form-control mb-3'
        />
        <button type='submit' className='btn btn-dark'>
          Send
        </button>
      </form>
    </>
  );
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: 'Hello there!', sending: false, key: 1 },
  ]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages((messages) => [...messages, { text: sentMessage }]); // обновляем состояние - берем предыдущее состояние и применяем новое
  }
  return (
    <>
      <h2 className='fs-3 mb-5'>
        useOptimistic()
        <small className='fw-lighter'> пример updateFn()</small>
      </h2>
      <Thread messages={messages} sendMessage={sendMessage} />
    </>
  );
}
// 46-29
