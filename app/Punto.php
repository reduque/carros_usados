<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Punto extends Model
{
    //
    public function grupo(){
	    return $this->belongsTo('App\Grupo');
	}
}
