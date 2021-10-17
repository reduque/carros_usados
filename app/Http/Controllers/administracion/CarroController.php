<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Carro;
use App\Marca;
use App\Modelo;
use App\Punto;
use App\CarroPunto;
use Session;

class CarroController extends Controller
{

    public function index(Request $request)
    {
        $carros=Carro::with('marca')->with('modelo')->get();
        return view('administracion.carros.index',compact('carros'));
    }
    public function carros_modelos(Request $request){
        $respuesta='';
        foreach (Modelo::where('marca_id', $request->idmarca)->orderby('modelo')->get() as $modelo){
            $seleccionado=($request->modeloid==$modelo->id) ? ' selected ' : '';
            $respuesta .= '<option value="' . $modelo->id . '" ' . $seleccionado . '>' . $modelo->modelo . '</option>';
        }
        return $respuesta;
    }
    public function create()
    {
        $marcas=Marca::get();
        return view('administracion.carros.create', compact('marcas'));
    }

    public function store(Request $request)
    {
        $rules = [
            'precio' => 'numeric|required',
            'descripcion' => 'required',
            'color' => 'required',
        ];

        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()){
            return back()->withErrors($validator)->withInput();
        }
        $data=$request->toArray();
        $carro=Carro::create($data);

        return redirect()->route('carros.edit', codifica($carro->id))->with("notificacion", __('administracion.grabado_exito') );
    }

    public function edit($id)
    {
        $id=decodifica($id);
        $carro=Carro::find($id);

        //dd($carro->puntos_intermedia);

        Session(['carro_id' => $id]);
        $marcas=Marca::get();
        $carro_id=$carro->id;
        $puntos=Punto::join('grupos','puntos.grupo_id','=','grupos.id')
        ->leftJoin('carro_puntos', function($join) use ($carro_id){
            $join->on('puntos.id', '=', 'carro_puntos.punto_id');
            $join->where('carro_puntos.carro_id','=',$carro_id);
        })->select(['puntos.*', 'grupo','respuesta'])->get();
        return view('administracion.carros.edit',compact('carro','marcas','puntos'));
    }

    public function carros_puntos(Request $request){
        if($request->respuesta=='No aplica'){
            if( $respuesta=CarroPunto::where('carro_id', $request->carroid)->where('punto_id', $request->puntoid)->first() ){
                $respuesta->delete();
            }
        }else{
            CarroPunto::updateOrCreate(
                [
                    'carro_id' => $request->carroid,
                    'punto_id' => $request->puntoid
                ],
                [
                    'respuesta' => $request->respuesta
                ]
            );
        }
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'precio' => 'numeric|required',
            'descripcion' => 'required',
            'color' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $carro=Carro::find($id);
            $data=$request->toArray();
            $carro->update($data);

            return redirect()->route('carros.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $carro=Carro::find($id);
            if($carro->foto<>''){
                $this->deleteFile('categorias/' . $carro->foto);
            }
            if($carro->banner<>''){
                $this->deleteFile('categorias/' . $carro->banner);
            }
            $carro->delete();
            return redirect()->route('carros.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }

}
