import React from 'react';

export default function MovieDetail({ id, movie }) {
    if (movie) {
        return (
            <h1>{movie.movie.name}</h1>
        )
    }

    return (
        <h1>Loading...</h1>
    )
}