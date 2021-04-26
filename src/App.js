import React, { Component } from 'react';
import pixabayApi from '../src/services/pixabayApi';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import './App.css';

class App extends Component {
    state = {
        showModal: false,
        gallery: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    onChangeQuery = query => {
        this.setState({
            searchQuery: query,
            currentPage: 1,
            gallery: [],
            error: null,
        });
    };
    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { currentPage, searchQuery };

        this.setState({ isLoading: true });

        pixabayApi
            .fetchImages(options)
            .then(gallery => {
                this.setState(prevState => ({
                    gallery: [...prevState.gallery, ...gallery],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    render() {
        const { showModal, gallery, isLoading, error } = this.state;
        const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
        console.log(gallery);
        return (
            <>
                {error && <h1>Error</h1>}
                <SearchBar onSubmit={this.onChangeQuery} />
                {showModal && <Modal onClose={this.toggleModal} />}
                {shouldRenderLoadMoreButton && (
                    <Button onClick={this.fetchImages} />
                )}
                <ImageGallery gallery={gallery} />
                {isLoading && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                )}
            </>
        );
    }
}

export default App;
