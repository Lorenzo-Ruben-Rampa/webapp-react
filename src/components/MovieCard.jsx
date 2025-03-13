import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, director, abstract, image } = props.movieProp;
    return (
        <div className="card mb-4">
            <div className="row-img">
                && {image} <img className="card-img-top" src={image} alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <h6>By {director || 'Anonymous'}</h6>
                <p>{abstract}</p>
            </div>
            < Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
        </div>
    )
}

export default MovieCard