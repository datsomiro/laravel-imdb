<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/api/movies/top-rated', 'Api\MovieController@topRated');
Route::get('/api/movies/movie-of-the-week', 'Api\MovieController@movieOfTheWeek');

Route::get('/api/movies/{id}', 'Api\MovieController@detail');
Route::post('/api/movies/{id}/review', 'Api\MovieController@review');

Route::view('/movie/{movie_id}/{path?}', 'movie/detail')->where(['movie_id' => '^\d+$', 'path' => '.*']);

// if no other route was matched yet, display the React app
// in other words: for all other URLs, display the React app
Route::view('/{path?}', 'react-app')->where('path', '.*');



