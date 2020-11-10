import React, { useState } from 'react';

export default function MovieReview({ id, movie }) {
    const [rating, setRating] = useState(50);
    const [text, setText] = useState('');

    const handleRatingChange = (event) => {
        const value = event.target.value;

        if (value >= 0 && value <= 100) {
            setRating(value);
        }
    }

    const handleTextChange = (event) => {
        const value = event.target.value;

        if (value.length <= 100) {
            setText(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('form is going to be submitted', { rating, text });

        // const data = {
        //     rating: rating,
        //     text: text
        // };

        const data = {
            rating,
            text
        };

        const url = `/api/movies/${id}/review`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(data)
        })

    }

    return (
        <div>
            <h1>Reviews {movie.movie.name}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Rating</label>
                    <input
                        type="number"
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                    />
                </div>

                <div>
                    <p>
                        Letters remaining: {100 - text.length}
                    </p>
                    {
                        text.length === 100 && (
                            <p>You message cannot be longer!</p>
                        )
                    }
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        cols="30"
                        rows="10" />
                </div>

                <button type="submit">Submit</button>
            </form>

        </div>
    )

}