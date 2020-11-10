import React, { useState, useEffect } from 'react';

export default function MovieOfTheWeek(props) {
    const [{ loading, loaded, data }, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = 'http://www.laravel-imdb.test/api/movies/movie-of-the-week'; // fill this in

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    console.log(data);

    let content = '';

    if (loading) {
        content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {
        content = (
            <>
                <div className="movie">

                    <img src="https://ia.media-imdb.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Deadpool" />

                    <div>

                        <h3>{data.movie.name}</h3>

                        <div className="year">{data.movie.year}</div>

                        <div className="genres">
                            {
                                data.genres.map(genre => (
                                    <span key={genre.id}>{genre.name}</span>
                                ))
                            }
                        </div>

                        <div className="starring">
                            <h4>Starring:</h4>

                            <div>
                                {
                                    data.people.map(person => (
                                        <span key={person.id}>{person.fullname}</span>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
    return (
        <section className="weekly-movie">
            <h2>Movie of the week</h2>
            { content}
        </section>
    );
}