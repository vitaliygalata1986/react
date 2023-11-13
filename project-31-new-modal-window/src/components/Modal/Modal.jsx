import ModalContext from '../../context/ModalContext';
import { useContext } from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

function Modal({ children }) {
  const { showModal, changeShowModal } = useContext(ModalContext);
  return (
    <div
      className={`${styles.backdrop} ${showModal ? styles.show__modal : ''}`}
      onClick={(e) => changeShowModal(false)}
    >
      <div
        className={`${styles.backdrop__modal} ${
          showModal ? styles.reset__transform : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button onClick={() => changeShowModal(false)}>Закрыть</Button>
      </div>
    </div>
  );
}

export default Modal;
