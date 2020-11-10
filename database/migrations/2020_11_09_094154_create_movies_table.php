<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('movies', function (Blueprint $table) {
           $table->id();
           $table->unsignedBigInteger('movie_type_id')->nullable();
           $table->unsignedBigInteger('movie_status_id')->nullable();
           $table->string('name')->nullable();
           $table->integer('length')->nullable();
           $table->year('year')->nullable();
           $table->year('start_year')->nullable();
           $table->year('end_year')->nullable();
           $table->float('rating')->nullable();
           $table->integer('votes_nr')->nullable();
           $table->integer('metascore')->nullable();
           $table->unsignedBigInteger('certification_id')->nullable();
           $table->unsignedBigInteger('budget')->nullable();
           $table->string('budget_currency')->nullable();
           $table->string('color_code')->nullable();
           // $table->timestamps();
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
