<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carro;
use Mail;

class HomeController extends Controller
{
    public function index(){
        $carros=Carro::where('estatus','nuevo')->limit(20)->orderby('created_at','desc')->with('marca')->with('modelo')->get();
        return view('home', compact('carros'));
    }

    public function catalogo(Request $request){
        //dd($request->except('page'));
        if($request->ordenamiento) Session(['ordenamiento' => $request->ordenamiento]);
        if( empty(session('ordenamiento')) ) Session(['ordenamiento' => 'recientes']);

        $palabras=creafiltro($request->q);
        $carros=Carro::where('estatus','nuevo')
        ->marca(($request->marca) ?: '')
        ->filtro($palabras)
        ->orderby((session('ordenamiento')=='recientes') ? 'created_at' : session('ordenamiento'),(session('ordenamiento')=='recientes') ? 'desc' : 'asc')->with('marca')->with('modelo')->paginate(20);

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

    public function enviar_formulario(Request $request){
        $data = [
            'mensaje' => '<p><b>Nueva solicitud de información: ' . $request->modelo . '</b></p><table border="1" cellspacing="0" cellpadding="5" bordercolor="#cccccc" align="center"><tr><td><b>Nombre y apellido</b></td><td>' . $request->nombre . '</td></tr><tr><td><b>Correo electrónico</b></td><td>' . $request->email . '</td></tr><tr><td><b>Teléfono</b></td><td>' . $request->telefono . '</td></tr></table><p><a href="' . route('single', $request->id) . '" style="background:#053361; color:#fff; font-weight: bold; border-radius: 5px; display: inline-block; padding: 5px 10px; text-decoration:none;">Ver ficha del vehículo</a></p>',
            //'email' => 'ltod@labtestondemand.com',
            'email' => 'reduque@hotmail.com',
        ];
        if ($_SERVER['HTTP_HOST'] != 'localhost') {
            Mail::send('emails.notificacion', $data, function ($message) use ($data) {
                $message->to($data['email'])->subject('New order');
            });
        }else{
            return view('emails.notificacion', ['mensaje'=>$data['mensaje']]);
        }
    }
}
