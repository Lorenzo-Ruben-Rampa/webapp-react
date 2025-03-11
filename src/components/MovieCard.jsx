import { Link } from "react-router-dom"
import ReviewCard from "./ReviewCard"

const MovieCard = () => {
    return (
        <div className="card mb-4">
            <img className="card-img-top"
                src="http://localhost:3000/img/movies_cover/inception.jpg"
                alt="descrizione img" />
            <div className="card-body">
                <h5 className="card-title">
                    Titolo del film
                </h5>
            </div>
            < Link to="movies/2" className="btn btn-primary">See more</Link>
        </div>
    )
}

export default MovieCard