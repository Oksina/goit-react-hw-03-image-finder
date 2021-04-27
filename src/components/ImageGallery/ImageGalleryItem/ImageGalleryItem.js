import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery, setLargeImg }) => {
    return gallery.map(image => {
        const { webformatURL, tags } = image;
        const { setLargeImg } = this.props;
        return (
            <li className={s.ImageGalleryItem}>
                <img
                    onClick={() => setLargeImg(image)}
                    src={webformatURL}
                    alt={tags}
                    className={s.ImageGalleryItemImage}
                    //onClose={toggleModal}
                />
            </li>
        );
    });
};

export default ImageGalleryItem;
