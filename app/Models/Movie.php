<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    public function genres()
    {
        return $this->belongsToMany(Genre::class)->limit(3);
    }

    public function people()
    {
        return $this->belongsToMany(Person::class);
    }

    public function posters()
    {
        return $this->hasMany(Poster::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}

