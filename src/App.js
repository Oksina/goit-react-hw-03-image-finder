import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/Searchbar';
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
    onChangeQuery = query => {
        console.log(query);
    };

    render() {
        const { showModal } = this.state;
        return (
            <>
                <SearchBar onSubmit={this.onChangeQuery} />
                {showModal && <Modal onClose={this.toggleModal} />}
            </>
        );
    }
}

export default App;
