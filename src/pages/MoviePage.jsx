import React from 'react';
import { Link } from "react-router-dom";
import ReviewCard from '../components/ReviewCard';

const MoviePage = () => {
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex-movie mb-3">
                    <img className="movie-img"
                        src="http://localhost:3000/img/movies_cover/matrix.jpg"
                        alt="descrizione img" />
                    <div className='movie-rw-text'>
                        <h1>Titolo libro</h1>
                        <h3 className="text-muted">
                            <i>
                                By Nome autore
                            </i>
                        </h3>
                        <p>
                            Abscract lorem ipsm dolor sit amet...
                        </p>
                    </div>
                </div>
            </header>

            <section>
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                    <span>Average</span>
                </header>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage