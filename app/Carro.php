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
	    return $this->hasMany('App\Foto')->orderby('orden');
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
			$palabras=explode("|", $txtBuscar);

			$marcas_id=[];
			foreach(Marca::where(function($query) use ($palabras){
				foreach($palabras as $txt){
					$query->orwhere("marca",'like','%' . $txt . '%');
				}
			})->get(['id']) as $marca){
				$marcas_id[]=$marca->id;
			}

			$modelos_id=[];
			foreach(Modelo::where(function($query) use ($palabras){
				foreach($palabras as $txt){
					$query->orwhere("modelo",'like','%' . $txt . '%');
				}
			})->get(['id']) as $modelo){
				$modelos_id[]=$modelo->id;
			}

			$query->where(function($query) use ($palabras, $marcas_id, $modelos_id){
				foreach($palabras as $txt){
					$query->orwhere("descripcion",'like','%' . $txt . '%')
					->orwhere("color",'like','%' . $txt . '%')
					->orwhere("transmision",'like','%' . $txt . '%')
					->orwhere('combustible','like','%' . $txt . '%')
					->orwhere('asientos','like','%' . $txt . '%');
					if(count($marcas_id)>0){
						$query->orwherein('marca_id',$marcas_id);
					}
					if(count($modelos_id)>0){
						$query->orwherein('modelo_id',$modelos_id);
					}
				}
			});
		}
	}

}
