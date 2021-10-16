<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Marca;
use App\Modelo;
use Illuminate\Support\Str;

class BorrarController extends Controller
{
    public function borrar(Request $request){
        if ($request->ajax()) {
            if($request->marca){
                $marca=Marca::updateorcreate([
                    'marca' => $request->marca
                ]);
                return['idmarca' => $marca->id];
            }else{
                if($request->modelo){
                    $modelo=Modelo::create([
                        'marca_id' => $request->idmarca,
                        'modelo' => $request->modelo,
                    ]);
                    return['idmodelo' => $modelo->id];
                }else{
                    return['idmodelo' => 0];
                }
            }
        }else{
            return view('borrar.borrar');
        }

    }
}
