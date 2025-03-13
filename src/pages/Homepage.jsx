import MovieCard from './../components/MovieCard';

const Homepage = () => {
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