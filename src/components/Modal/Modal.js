import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    state = {
        isLoading: false,
    };
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        largeImgUrl: PropTypes.string.isRequired,
    };
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };
    handleLoad = () => {
        this.setState({ isLoading: true });
    };

    render() {
        const { handleBackdropClick } = this;
        const { largeImgUrl } = this.props;
        return createPortal(
            <div className={s.Overlay} onClick={handleBackdropClick}>
                <div className={s.Modal}>
                    <img
                        src={largeImgUrl}
                        alt="Gallery item"
                        onLoad={this.handleLoad}
                    />
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
