<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annonce extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'poster_first_name',
        'poster_last_name',
        
        'titre',
        'description',
        'image',
    ];

    //utilisser l'uuid comme clé primaire
    public function getRouteKeyName()
    {
        return 'uuid';
    }



}
