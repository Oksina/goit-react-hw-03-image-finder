import React, { Component } from 'react';
import { fetchImages } from '../src/services/pixabayApi';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import Error from './components/Error/Error';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import './App.css';

class App extends Component {
    state = {
        gallery: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null,
        selectedImg: '',
        showModal: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.getImages();
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
            selectedImg: '',
            showModal: false,
        });
    };
    getImages = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { currentPage, searchQuery };

        this.setState({ isLoading: true });

        fetchImages(options)
            .then(gallery => {
                this.setState(prevState => ({
                    gallery: [...prevState.gallery, ...gallery],
                    currentPage: prevState.currentPage + 1,
                }));
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };
    setLargeImg = image => {
        this.toggleModal();
        this.setState({ selectedImg: image.largeImageURL });
    };

    render() {
        const {
            showModal,
            gallery,
            isLoading,
            error,
            selectedImg,
        } = this.state;
        const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
        return (
            <div className="App">
                <SearchBar onSubmit={this.onChangeQuery} />
                <ImageGallery
                    gallery={gallery}
                    setLargeImg={this.setLargeImg}
                />
                {error && <Error message={error.message} />}
                {isLoading && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={50}
                        width={50}
                        timeout={3000}
                        className="loader"
                    />
                )}
                {shouldRenderLoadMoreButton && (
                    <Button onClick={this.getImages} />
                )}
                {showModal && (
                    <Modal
                        largeImgUrl={selectedImg}
                        onClose={this.toggleModal}
                    />
                )}
            </div>
        );
    }
}

export default App;
