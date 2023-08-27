import React, { useEffect } from "react";
import styles from "./toast.module.css";

const Toast = ({ title, onClose, duration = 20000, message, type, id }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose({ id }), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastIcon = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{toastIcon}</div>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.closeButton} onClick={() => onClose({ id })}>
          &times;
        </button>
      </div>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
