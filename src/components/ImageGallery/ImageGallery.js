import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
    state = {};
    render() {
        const { gallery } = this.props;
        return (
            <ul className={s.ImageGallery}>
                {gallery.map(({ id, item }) => {
                    return (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={item}
                            largeImageURL={this.getImageForModal}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default ImageGallery;
