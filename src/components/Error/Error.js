import React from 'react';
import PropTypes from 'prop-types';

import s from './Error.module.css';

const Error = ({ fetchLength, galleryLength, searchQuery, error }) => {
    if (error) {
        // console.log(error);
        return <p className={s.error}>Oops! Something wrong! Request error!</p>;
    } else if (!error) {
        if (!searchQuery) {
            return <p className={s.error}>Please enter image name!</p>;
        } else if (searchQuery) {
            if (!fetchLength && !galleryLength) {
                return (
                    <p className={s.error}>
                        Image not found. Please check your request and try
                        again!
                    </p>
                );
            } else if (fetchLength < 12 && galleryLength > 0) {
                return (
                    <p className={s.error}>
                        These are all the images we found!
                    </p>
                );
            }
        }
    }

    return <p></p>;
};
Error.defaultProps = {
    fetchLength: 0,
    galleryLength: 0,
    searchQuery: '',
    error: false,
};
Error.propTypes = {
    fetchLength: PropTypes.number,
    galleryLength: PropTypes.number,
    searchQuery: PropTypes.string,
    error: PropTypes.bool,
};
export default Error;
