import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, author, abstract, image } = props.movieProp;
    return (
        <div className="card mb-4">
            <div className="row-img">
                <img className="card-img-top"
                    src={image}
                    alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <h6>By {author}</h6>
                <p>{abstract}</p>
            </div>
            < Link to={`books/${id}`} className="btn btn-primary">See more</Link>
        </div>
    )
}

export default MovieCard