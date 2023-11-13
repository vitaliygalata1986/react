import { createContext } from 'react';

const ModalContext = createContext({
  showModal: '',
  changeShowModal: () => {},
});

export default ModalContext;
