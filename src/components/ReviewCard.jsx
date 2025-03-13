const ReviewCard = () => {
    return (
        <div className="review-card mb-4">
            <div className="card-body">
                <p className="card-text">
                    testo della recensione
                </p>
                <strong>
                    Vote: voto recensione
                </strong>
                <address>
                    <i>
                        By nome del recensore
                    </i>
                </address>
            </div>
        </div>
    );
}

export default ReviewCard