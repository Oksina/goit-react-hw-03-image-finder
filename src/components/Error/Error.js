import React from 'react';
import PropTypes from 'prop-types';

import s from './Error.module.css';

const Error = ({ message }) => {
    return <p className={s.error}>{message}</p>;
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Error;
