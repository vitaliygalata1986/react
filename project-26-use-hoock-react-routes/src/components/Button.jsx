import styles from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
