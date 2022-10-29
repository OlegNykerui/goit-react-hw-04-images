import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ img }) => {
  const [modalShow, setModalShow] = useState(false);

  const modalToggle = () => setModalShow(!modalShow);

  const { webformatURL, tags, largeImageURL } = img;
  return (
    <li className={css.galleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={modalToggle}
        className={css.galleryImage}
      />
      {modalShow && (
        <Modal src={largeImageURL} alt={tags} modalToggle={modalToggle} />
      )}
    </li>
  );
};
