import axios from 'axios';
import MovieCard from './../components/MovieCard';

const Homepage = () => {

    const fetcMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    console.log(res.data);
                }
            )
            .catch(err => console.log(err))
    }

    fetcMovies();

    return (
        <>
            <h1 className="text-primary">Home</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}

export default Homepage