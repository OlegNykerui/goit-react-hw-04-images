import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };

  modalToggle = () =>
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.img;
    return (
      <li className={css.galleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.modalToggle}
          className={css.galleryImage}
        />
        {this.state.modalShow && (
          <Modal
            src={largeImageURL}
            alt={tags}
            modalToggle={this.modalToggle}
          />
        )}
      </li>
    );
  }
}
