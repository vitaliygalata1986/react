import { createContext } from 'react';

const ModalContext = createContext({
  show: '',
  changeShow: () => {},
});

export default ModalContext;
