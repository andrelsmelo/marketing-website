import { useEffect } from 'react';
import styles from '@/styles/Modal.module.css';

const Modal = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, closeModal]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles['modal-overlay']} onClick={handleOverlayClick}>
          <div className={styles.modal}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
