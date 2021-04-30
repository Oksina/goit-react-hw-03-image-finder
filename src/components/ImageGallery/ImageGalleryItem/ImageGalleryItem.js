import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery, setLargeImg, toggleModal }) => {
    return gallery.map(image => {
        const { webformatURL, tags, id } = image;
        return (
            <li className={s.ImageGalleryItem} key={id}>
                <img
                    onClick={() => setLargeImg(image)}
                    src={webformatURL}
                    alt={tags}
                    className={s.ImageGalleryItemImage}
                    onClose={toggleModal}
                />
            </li>
        );
    });
};
ImageGalleryItem.propTypes = {
    gallery: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ).isRequired,
    setLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
