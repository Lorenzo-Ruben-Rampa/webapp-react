// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="d-flex">
            <h2>Page Not Found</h2>
            <p className="text-muted my-3">Sorry, but the page you are looking for does not exist.</p>
            {/* <img src="http://localhost:3000/img/movies_cover/hd-error.png" /> */}
            <Link className="btn btn-primary" to="/">Back to home</Link>
        </div>
    )
}

export default NotFoundPage