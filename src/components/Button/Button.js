import React, { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
    state = {};

    render() {
        return (
            <button type="button" className={s.Button}>
                Load more
            </button>
        );
    }
}

export default Button;
