<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carro;

class HomeController extends Controller
{
    public function index(){
        $carros=Carro::where('estatus','nuevo')->limit(20)->orderby('created_at','desc')->with('marca')->with('modelo')->get();
        return view('home', compact('carros'));
    }

    public function catalogo(Request $request){
        $palabras=creafiltro($request->q);
        $carros=Carro::where('estatus','nuevo')->marca(($request->marca) ?: '')->orderby('created_at','desc')->with('marca')->with('modelo')->paginate(20);
        return view('category',compact('carros'));
    }

    public function single($id){
        if( $carro=Carro::find(decodifica($id)) ){
            $relacionados=Carro::where('id', '<>', $carro->id)->where('estatus','nuevo')->where(function($q) use ($carro){
                $q->where('marca_id', $carro->marca_id);
                $q->orwhere('transmision', $carro->transmision);
            })->inRandomOrder()->limit(4)->get();
            return view('single', compact('carro','relacionados'));
        }
        return redirect()->route('home');
    }

}
