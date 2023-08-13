// components/InputWithButton.js
import styles from "./inputwithbutton.module.css";

const InputWithButton = ({
  onChange,
  onClick,
  input,
  children,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={styles.input}
      />
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default InputWithButton;
