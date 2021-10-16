<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use App\Marca;
use App\Modelo;
use App\Order;
use Illuminate\Support\Facades\Mail;
class ModeloController extends Controller
{

    public function index()
    {
        if($marca=Marca::find(session('marca_id'))){
            //$modelos=Modelo::where('marca_id',session('marca_id'))->orderby('orden')->paginate(30);
            $modelos=Modelo::where('marca_id',session('marca_id'))->get();
            return view('administracion.modelos.index',['modelos' => $modelos, 'marca' => $marca]);
        }
        return redirect()->route('administracion_home');
    }

    public function ordena_modelos(Request $request){
        $ids=explode(',',$request->ids);
        $orden=0;
        foreach ($ids as $id) {
            $orden++;
            Modelo::find(decodifica($id))->update(['orden'=>$orden]);
        }
    }
    public function create()
    {
        if($marca=Marca::find(session('marca_id'))){
            return view('administracion.modelos.create',['marca' => $marca]);
        }
        return redirect()->route('administracion_home');
    }
    public function store(Request $request)
    {
        $rules = [
            'modelo' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            
            $data=$request->toArray();
            $modelo=Modelo::create($data);

            return redirect()->route('modelos.edit', codifica($modelo->id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $id=decodifica($id);
        $modelo=Modelo::find($id);
        $marca=Marca::find(session('marca_id'));
        Session(['modelo_id' => $id]);
        return view('administracion.modelos.edit',['modelo' => $modelo, 'marca' => $marca]);
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'modelo' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $modelo=Modelo::find($id);
            
            $data=$request->toArray();
            $modelo->update($data);

            return redirect()->route('modelos.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $modelo=Modelo::find($id);
            $modelo->delete();
            return redirect()->route('modelos.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }

}
