import axios from 'axios';
import MovieCard from './../components/MovieCard';
import { useState, useEffect } from "react"

const Homepage = () => {

    //setto stato componente
    const [movies, setMovies] = useState([]);

    const fetcMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    // console.log(res.data);
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    // useEffect per evitare loop infinito di fetchMovies ();
    useEffect(fetcMovies, [])

    //funzione rendering card dei film
    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div className='col' key={movie.id} >
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h1 className="text-primary">Home</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                {renderMovies()}
            </div>
        </>
    )
}

export default Homepage