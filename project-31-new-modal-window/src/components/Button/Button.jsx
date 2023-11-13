import ModalContext from '../../context/ModalContext';
import { useContext } from 'react';
import styles from './Button.module.css';

function Button({ children }) {
  const { showModal, changeShowModal } = useContext(ModalContext);
  console.log(showModal);
  return (
    <button
      onClick={() => changeShowModal(!showModal)}
      type="button"
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
