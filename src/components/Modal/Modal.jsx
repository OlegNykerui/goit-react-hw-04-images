import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyExit);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyExit);
  }

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={e => this.handleKeyExit(e)}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
  handleKeyExit = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      return this.props.modalToggle();
    }
  };
}
