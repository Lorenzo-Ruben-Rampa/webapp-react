import React from 'react'

const MoviePage = () => {
    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img className="book-img"
                        src="http://localhost:3000/img/books/great-gatsby.jpg"
                        alt="descrizione img" />
                    <div>
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
        </>
    )
}

export default MoviePage