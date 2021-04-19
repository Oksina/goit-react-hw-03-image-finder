import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = () => (
    <ul className={s.ImageGallery}>
        <ImageGalleryItem />
    </ul>
);

export default ImageGallery;
