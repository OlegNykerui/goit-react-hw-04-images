import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ src, alt, modalToggle }) => {
  const handleKeyExit = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      return modalToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyExit);
    return () => window.removeEventListener('keydown', handleKeyExit);
  });

  return createPortal(
    <div className={css.overlay} onClick={e => handleKeyExit(e)}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};
