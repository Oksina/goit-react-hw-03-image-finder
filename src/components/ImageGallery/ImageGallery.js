import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
    render() {
        const { gallery } = this.props;
        const { setLargeImg } = this;
        console.log(gallery);
        return (
            <ul className={s.ImageGallery}>
                <ImageGalleryItem
                    //key={this.id}
                    gallery={gallery}
                    largeImageURL={setLargeImg}
                    //onClose={toggleModal()}
                />
            </ul>
        );
    }
}

export default ImageGallery;
