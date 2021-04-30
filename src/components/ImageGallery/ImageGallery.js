import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
    render() {
        const { gallery, setLargeImg, toggleModal } = this.props;
        return (
            <ul className={s.ImageGallery}>
                <ImageGalleryItem
                    gallery={gallery}
                    setLargeImg={setLargeImg}
                    toggleModal={toggleModal}
                />
            </ul>
        );
    }
}

export default ImageGallery;
