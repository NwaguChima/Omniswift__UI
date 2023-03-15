import React from 'react';
import { createPortal } from 'react-dom';
import styles from './resultWrapper.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  content: any;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, content }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.modal}
      onClick={(e: any) => {
        if (e.target.classList.contains(styles.modal)) {
          window.location.reload();
        }
      }}
    >
      <div className={styles.modal__content}>{content}</div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
