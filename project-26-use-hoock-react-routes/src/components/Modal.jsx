import Button from './Button';
import styles from './Modal.module.css';

function Modal({ show, changeShow, children }) {
  return (
    <div
      className={`${styles.backdrop} ${show ? styles.show__modal : ''}`}
      onClick={(e) => changeShow(false)}
    >
      <div
        className={`${styles.backdrop__modal} ${
          show ? styles.reset__transform : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button onClick={() => changeShow(false)}>Закрыть</Button>
      </div>
    </div>
  );
}

export default Modal;
