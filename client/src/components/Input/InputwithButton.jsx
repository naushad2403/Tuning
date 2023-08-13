// components/InputWithButton.js
import Input from "./Input";
import styles from "./inputwithbutton.module.css";

const InputWithButton = ({
  onChange,
  onClick,
  input,
  children,
  placeholder,
  isInvalid,
  error,
  name,
  label,
}) => {
  return (
    <div className={styles.container}>
      <Input
        onChange={onChange}
        value={input}
        placeholder={placeholder}
        isInvalid={isInvalid}
        error={error}
        name={name}
        label={label}
      />
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default InputWithButton;
