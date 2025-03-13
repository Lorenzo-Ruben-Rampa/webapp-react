const ReviewCard = (reviewProp) => {

    //destrutturo prop
    const { name, text, vote } = reviewProp;

    return (
        <div className="review-card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <strong>
                    Vote: {vote}
                </strong>
                <address>
                    <i>
                        By {name}
                    </i>
                </address>
            </div>
        </div>
    );
}

export default ReviewCard