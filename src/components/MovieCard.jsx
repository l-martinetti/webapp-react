import { useGlobalContext } from "../contexts/GlobalContext"
import { Link } from 'react-router-dom'
import { useEffect } from "react";

const MovieCard = () => {

    const { fetchMovies, movies } = useGlobalContext();

    useEffect(() => { fetchMovies() }, [])

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-start">
            {movies.map(movie => (
                <div key={movie.id} className="card">
                    <img src={movie.image} alt={movie.title} />
                    <div className="card-body d-flex flex-column" >
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                    <div className="mt-auto d-flex justify-content-end">
                        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                    </div>
                </div >
            ))}
        </div>
    )
}

export default MovieCard