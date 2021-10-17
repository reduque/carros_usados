<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarroPunto extends Model
{
    protected $guarded = ['id'];

    public function punto(){
	    return $this->belongsTo('App\Punto')->with('grupo');
	}
    public function carro(){
	    return $this->belongsTo('App\Carro');
	}

}
