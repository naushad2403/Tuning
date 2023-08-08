import "./input.css";
const Input = ({ type, name, value, onChange, label, isInvalid, error }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) => {
          onChange(name, e.value);
        }}
        className={`input ${isInvalid ? "input-error" : ""}`}
      />
      {isInvalid && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
