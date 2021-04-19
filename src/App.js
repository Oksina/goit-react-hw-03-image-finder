import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';

import './index.css';
import './App.css';

class App extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        return (
            <>
                {showModal && <Modal onClose={this.toggleModal} />}
                <ImageGallery />
            </>
        );
    }
}

export default App;
