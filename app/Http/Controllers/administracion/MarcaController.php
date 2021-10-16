<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Marca;
use Session;

class MarcaController extends Controller
{

    public function index(Request $request)
    {
        $marcas=Marca::get();
        return view('administracion.marcas.index',['marcas' => $marcas]);
    }

    public function ordena_marcas(Request $request){
        $ids=explode(',',$request->ids);
        $orden=0;
        foreach ($ids as $id) {
            $orden++;
            Marca::find(decodifica($id))->update(['orden'=>$orden]);
        }
    }

    public function create()
    {
        return view('administracion.marcas.create');
    }

    public function store(Request $request)
    {
        $rules = [
            'marca' => 'required',
        ];

        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()){
            return back()->withErrors($validator)->withInput();
        }
        $data=$request->toArray();
        $marca=Marca::create($data);
        /*
        // slug
        $n=0;
        $slug=str::slug($marca->marca,"-");
        $slug_f=$slug;
        while(Marca::where('id','<>',$marca->id)->where('slug',$slug_f)->first()){
            $n++;
            $slug_f=$slug . '-' . $n;
        }
        $marca->update([
            'slug' => $slug_f
        ]);
        */
        return redirect()->route('marcas.edit', codifica($marca->id))->with("notificacion", __('administracion.grabado_exito') );
    }

    public function edit($id)
    {
        $id=decodifica($id);
        $marca=Marca::find($id);
        Session(['marca_id' => $id]);
        return view('administracion.marcas.edit',['marca' => $marca]);
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'marca' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $marca=Marca::find($id);
            $data=$request->toArray();
            $marca->update($data);
            /*
            // slug
            $n=0;
            $slug=str::slug($marca->marca,"-");
            $slug_f=$slug;
            while(Marca::where('id','<>',$marca->id)->where('slug',$slug_f)->first()){
                $n++;
                $slug_f=$slug . '-' . $n;
            }
            $marca->update([
                'slug' => $slug_f
            ]);
            */
            return redirect()->route('marcas.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $marca=Marca::find($id);
            $marca->delete();
            return redirect()->route('marcas.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }

}
