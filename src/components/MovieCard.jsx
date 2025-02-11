import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react";

const MovieCard = () => {

    const { fetchMovies, movies } = useGlobalContext();

    useEffect(() => { fetchMovies() }, [])

    return (
        <>
            {movies.map(movie => (
                <div key={movie.id} className="card col-3 mb-2">
                    <img src={movie.image} alt={movie.title} />

                    <div className="card-body" >
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>

                </div >
            ))}
        </>
    )
}

export default MovieCard