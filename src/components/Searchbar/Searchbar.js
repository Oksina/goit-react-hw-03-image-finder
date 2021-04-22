import React, { Component } from 'react';
import s from './Searchbar.module.css';

class SearchForm extends Component {
    state = { query: '' };

    handleChange = e => {
        this.setState({ query: e.currentTarget });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);

        this.setState({ query: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autocomplete="off"
                        autofocus
                        value={this.state.query}
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
export default SearchForm;
