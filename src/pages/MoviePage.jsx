import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import ReviewCard from '../components/ReviewCard';
import ReviewForm from './../components/ReviewForm';

const MoviePage = () => {

    //recupero id del movie richiesto
    const { id } = useParams();

    //imposto lo stato del componente
    const [movie, setMovie] = useState({});

    //use Navigate
    const redirect = useNavigate();

    //funzione di chiamata API
    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    // console.log(res.data);
                    setMovie(res.data)
                }
            )
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/*")
            }
            )
    }

    //chiamata all'API al montaggio del componente
    useEffect(fetchMovie, []);

    //funzione di rendering delle reviews
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex-movie mb-3">
                    <img className="movie-img"
                        src={movie.image}
                        alt={movie.title} />
                    <div className='movie-rw-text'>
                        <h1>{movie.title}</h1>
                        <h3 className="text-muted">
                            <i>
                                By {movie.director}
                            </i>
                        </h3>
                        <p>
                            {movie.abstract}
                        </p>
                    </div>
                </div>
            </header>

            <section>
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                    <span>Average</span>
                </header>
                {renderReviews()}
            </section>

            <section>
                <ReviewForm book_id={book.id} realoadReviews={fectBook} />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage