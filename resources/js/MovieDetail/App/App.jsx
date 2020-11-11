import React, { useState, useEffect } from 'react';

import { Route, Switch, useParams } from "react-router-dom";
import Register from "./Register";
import MovieReview from "./MovieReview";
import MovieDetail from "./MovieDetail";

export default function App() {
    let { id } = useParams();
    const [movie, setMovie] = useState(null);

    const loadMovie = async () => {
        const response = await fetch(`http://www.laravel-imdb.test/api/movies/${id}`);
        const data = await response.json();

        setMovie(data)
    }

    useEffect(() => {
        loadMovie();
    }, [])

    if (movie === null) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (

        <div>
            <h1>register</h1>
            <Register />
            <Switch>
                <Route path="/movie/:id/review">
                    <MovieReview id={id} movie={movie} />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetail id={id} movie={movie} />
                </Route>
            </Switch>
        </div>
    )
}