import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(img => (
        <ImageGalleryItem img={img} key={img.id} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
