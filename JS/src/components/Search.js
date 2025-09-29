import React from 'react';
import './Search.css';

class Search extends React.Component {
    state = {
        search: '',
    }

    handleSearch = () => {
        const { search } = this.state;
        const { searchMovies } = this.props;

        if (search.trim()) {
            searchMovies(search);
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }

    render() {
        return (
            <>
            <div className="search">
                <input
                    type="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="search-button">
                    <button className="search-button" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
            </>
        )
    }
}
export default Search;