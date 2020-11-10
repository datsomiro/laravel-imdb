<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    //
    public function topRated()
    {
        $movies = Movie::query()
            ->where('votes_nr', '>', 10000)
            ->where('movie_type_id', 1)
            ->orderBy('rating', 'desc')
            ->limit(10)
            ->get();

        return $movies;
    }

    public function movieOfTheWeek()
    {
        // $movie_id = 1431045;
        $movie_id = 2709768;

        $movie = Movie::findOrFail($movie_id);

        $genres = $movie->genres;

        $people = $movie->people()
            ->limit(3)
            ->where('movie_person.position_id', 254)
            ->orderBy('movie_person.priority', 'desc')
            ->get();

        $poster = $movie->posters()
            ->where('is_main', 1)
            ->first();

        // return [
        //     'movie' => $movie,
        //     'genres' => $genres,
        //     'people' => $people
        // ];

        // same as above:
        return compact('movie', 'genres', 'people', 'poster');
    }

    public function detail($id)
    {
        $movie = Movie::findOrFail($id);

        $genres = $movie->genres;

        $people = $movie->people()
            ->limit(3)
            ->where('movie_person.position_id', 254)
            ->orderBy('movie_person.priority', 'desc')
            ->get();

        //$poster = $movie->posters()
        //    ->where('is_main', 1)
        //    ->first();

        return compact('movie', 'genres', 'people' );
    }

    public function review($id, Request $request)
    {
        // todo provide validation!

        $movie = Movie::findOrFail($id);

        $movie->reviews()->create($request->all());

        return [
            'status' => 'success',
        ];
    }
}

