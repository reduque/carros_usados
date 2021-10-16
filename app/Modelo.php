<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    protected $guarded = ['id'];
    public function marca(){
	    return $this->belongsTo('App\Marca');
	}	
	public function carros(){
	    return $this->hasMany('App\Carro');
	}	

}
