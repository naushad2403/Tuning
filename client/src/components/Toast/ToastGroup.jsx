import React from "react";
import Toast from "./Toast";
import { useDispatch, useSelector } from "react-redux";
import { addToast, removeToast } from "@/store/slices/toast";
import styles from "./toast.module.css";

export const ToastGroup = () => {
  const toasts = useSelector((state) => state.toast.toasts);
  const onClose = (toast) => {
    dispatch(removeToast(toast.id));
  };
  const dispatch = useDispatch();

  return (
    <div className={styles.toastWrapper}>
      {toasts.map((item, index) => (
        <Toast {...item} key={index} onClose={onClose} />
      ))}
    </div>
  );
};
