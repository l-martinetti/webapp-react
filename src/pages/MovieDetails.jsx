import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {

    const { movie, fetchMovie } = useGlobalContext();
    const { id } = useParams();

    useEffect(() => { fetchMovie(id) }, [id])

    return (
        <section className="container my-3">
            <div className="row border-bottom">
                <div className="col-12 my-3 d-flex justify-content-center">
                    <img src={movie?.image} alt={movie?.title} />
                </div>
                <div className="col col-8">
                    <h2>{movie?.title}</h2>
                    <p>{movie?.abstract}</p>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails