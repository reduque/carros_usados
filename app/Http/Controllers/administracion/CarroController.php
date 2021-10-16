<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Carro;
use App\Marca;
use App\Modelo;
use Session;

class CarroController extends Controller
{

    public function index(Request $request)
    {
        $carros=Carro::get();
        return view('administracion.carros.index',['carros' => $carros]);
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
        Session(['carro_id' => $id]);
        $marcas=Marca::get();
        return view('administracion.carros.edit',compact('carro','marcas'));
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
