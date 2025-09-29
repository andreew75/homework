import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import Search from '../components/Search';


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=ae546d65&s=cat')
        .then(res => res.json())
        .then(data => this.setState({ movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=ae546d65&s=${str}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search}))
    }

    render() {
        const { movies } = this.state;

        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovies={this.searchMovies}/>
                    {
                        movies.length ? <MovieList movies={movies}/> : <Loader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;