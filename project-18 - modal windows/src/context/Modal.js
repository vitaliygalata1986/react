import { createContext } from 'react';

const ModalContext = createContext({
  showModal: false,
  changeShow: () => {},
});
export default ModalContext;
