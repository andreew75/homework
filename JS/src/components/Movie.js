import '../components/Movie.css'

function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
        <div className="card">
            <img src={Poster} alt={imdbID} />
            <div className="card-body">
                <h3>{Title}</h3>
                <p>{Year}</p> <span id="year">{Type}</span>
            </div>
        </div>
    )
}

export default Movie;