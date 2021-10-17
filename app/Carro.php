<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    protected $guarded = ['id'];
    public function marca(){
	    return $this->belongsTo('App\Marca');
	}
    public function modelo(){
	    return $this->belongsTo('App\Modelo');
	}
    public function fotos(){
	    return $this->hasMany('App\Foto');
	}
    public function puntos_intermedia(){
	    return $this->hasMany('App\CarroPunto')->with('punto')->orderby('punto_id');
	}

}
