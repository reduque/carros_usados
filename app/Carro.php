<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Marca;
use App\Modelo;

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
	//filtros
	public function scopeMarca($query, $filter){
		if($filter<>''){
			if($marca=Marca::where('marca', $filter)->first()){
				$query->where('marca_id',$marca->id);
			}
		}
	}

	public function scopeFiltro($query, $txtBuscar){
		if($txtBuscar <> ''){
			//$query->where("experiencias.nombre",'like','%' . $txtBuscar . '%');
			$query->join('venues', function($join){
				$join->on('experiencias.idvenue', '=', 'venues.id');
			});
			$query->join('users', function($join){
				$join->on('experiencias.iduser', '=', 'users.id');
			});
			$query->where(function($query) use ($txtBuscar){
				foreach(explode("|", $txtBuscar) as $txt){
					$query->orwhere("experiencias.nombre",'like','%' . $txt . '%')
					->orwhere("venues.nombre",'like','%' . $txt . '%')
					->orwhere("venues.ciudad",'like','%' . $txt . '%')
					->orwhere('first_name','like','%' . $txt . '%')
					->orwhere('last_name','like','%' . $txt . '%')
					->orwhere('nickname','like','%' . $txt . '%');
				}
			});
		}
	}

}
