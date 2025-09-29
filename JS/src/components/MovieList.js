import Movie from '../components/Movie';
import './MovieList.css';


function MovieList(props) {
    const {movies = []} = props;

    return (
        <div className='movies'>
            {
                movies.map(movie => {
                    return <Movie {...movie} key={movie.imdbID} />
                })
            }
        </div>
    )
}
export default MovieList;