<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    protected $guarded = ['id'];
	public function modelos(){
	    return $this->hasMany('App\Modelo');
	}	
	public function carros(){
	    return $this->hasMany('App\Carro');
	}	
}
