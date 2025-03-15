import axios from "axios";
// importiamo parte LInk del modulo react-router
import { Link, useNavigate } from "react-router-dom"
// importiamo lo useState
import { useState } from "react";

const initialData = {
    title: "",
    author: "",
    image: null,
    abstract: ""
};

const CreateMoviePage = () => {

    const [formDataOgj, setFormDataOgj] = useState(initialData);

    //gestione raccolta dati del form
    const setFieldValue = () => {
        const { value, name } = e.target;
        if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
        else setFormDataOgj({ ...formDataOgj, [name]: value });
    }

    // gestione invio del form
    const handleSubmit = (e) => {
        e.preventDefault();

        // // Creiamo un oggetto FormData per inviare i dati del form
        const dataToSend = new FormData();

        // // Aggiungiamo dinamicamente i dati del form all'oggetto FormData
        for (const key in formDataOgj) {
            dataToSend.append(key, formDataOgj[key]);
        }
    }

    return (
        <>
            <header className="border-bottom border-1 mb-3">
                <h1>Add a new movie</h1>
            </header>

            <section id="movie-form">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Author:</label>
                        <input
                            className="form-control"
                            name="author"
                            type="text"
                            value={formDataOgj.author}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            value={formDataOgj.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Back</Link>
                        <button className="btn btn-success" type="submit">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </>

    )
}

export default CreateMoviePage