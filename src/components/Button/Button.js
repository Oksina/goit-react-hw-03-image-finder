import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class Button extends Component {
    state = {};
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <button
                type="button"
                className={s.Button}
                onClick={this.props.onClick}
            >
                Load more
            </button>
        );
    }
}

export default Button;
