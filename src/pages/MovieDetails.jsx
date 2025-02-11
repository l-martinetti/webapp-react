import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {

    const api_url = import.meta.env.VITE_API_URL
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        axios.get(`${api_url}/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            })
    }

    useEffect(() => { fetchMovie() }, [])

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