import styles from './Button.module.css';

function Button(props) {
  // console.log(props);
  const { children, title, disabled = false } = props;
  console.log({ ...props });
  return (
    <button
      {...props} // разделяем на свойства объект props и передаем в качестве свойств в компонент button
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
