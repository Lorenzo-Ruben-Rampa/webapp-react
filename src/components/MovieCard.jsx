import { Link } from "react-router-dom"

const MovieCard = () => {
    return (
        <div className="card mb-4">
            <div className="row-img">
                <img className="card-img-top"
                    src="http://localhost:3000/img/movies_cover/inception.jpg"
                    alt="descrizione img" />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    Titolo del film
                </h5>
                <h6>By Author</h6>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusamus numquam autem distinctio voluptatibus magnam consequuntur illum. Omnis ad quis, veniam consectetur, officiis eum cum ex quia, repellendus sed natus?</p>
            </div>
            < Link to="movies/2" className="btn btn-primary">See more</Link>
        </div>
    )
}

export default MovieCard