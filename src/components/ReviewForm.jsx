import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movie_id }) => {

    const initialValue = { name: "", text: "", vote: 1 };

    //variabile di stato per info form
    const [formData, setFormData] = useState(initialValue);

    //funzione di creazione oggetto valori form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // funzione di invio richiesta al submit del form
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    reloadReviews()
                }
            )
            .catch(err => console.log(err)
            )
    }

    return (
        <div className='form-card'>
            <h3>Add your review</h3>
            <div className='card'>
                <form onSubmit={submitReview}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" min="1" max="5" className="form-control" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="justify-content-end pt-3 send-btn">
                        <button type="submit" className="btn form-btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ReviewForm