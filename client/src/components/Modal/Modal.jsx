import { useEffect } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
      return () => {
        document.documentElement.style.overflow = "scroll";
        document.body.scroll = "yes";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
