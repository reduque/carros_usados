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
    public function webp(Request $request){
        //$url='borrar/uploads/carros/galeria/*.jpeg';
        $url='borrar/uploads/carros/*.jpeg';
        if ($request->ajax()) {
            $archivo=$request->archivo;
            $destino = explode(".", trim($archivo))[0] . "." . 'webp';
            $image=  imagecreatefromjpeg($archivo);
            ob_start();
            imagejpeg($image,NULL,100);
            $cont=ob_get_contents();
            ob_end_clean();
            imagedestroy($image);
            $content =  imagecreatefromstring($cont);
            imagewebp($content,$destino);
            imagedestroy($content);
        }else{
            return view('borrar.webp',['archivos' => glob($url)]);
        }
    }
}
