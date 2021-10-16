<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use App\Category;
use App\Producto;
use App\Order;
use Illuminate\Support\Facades\Mail;
class ProductoController extends Controller
{

    public function index()
    {
        if($category=Category::find(session('category_id'))){
            //$productos=Producto::where('category_id',session('category_id'))->orderby('orden')->paginate(30);
            $productos=Producto::where('category_id',session('category_id'))->orderby('orden')->get();
            return view('administracion.productos.index',['productos' => $productos, 'category' => $category]);
        }
        return redirect()->route('administracion_home');
    }

    public function ordena_productos(Request $request){
        $ids=explode(',',$request->ids);
        $orden=0;
        foreach ($ids as $id) {
            $orden++;
            Producto::find(decodifica($id))->update(['orden'=>$orden]);
        }
    }
    public function create()
    {
        if($category=Category::find(session('category_id'))){
            return view('administracion.productos.create',['category' => $category]);
        }
        return redirect()->route('administracion_home');
    }
    public function store(Request $request)
    {
        $rules = [
            'nombre' => 'required',
            'precio_base' => 'numeric|required',
            'precio' => 'numeric|required|lte:precio_base',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            
            $data=$request->toArray();
            $data['activo']= $request->activo ? 1 : 0;
            $data['destacado']= $request->destacado ? 1 : 0;
            for($l=1; $l<=4; $l++){
                if($request->{'foto' . $l}){
                    $data['foto' . $l] = $this->saveFile($request->{'foto' . $l}, 'productos/',(string)(date("YmdHis")) . (string)(rand(1,9)));
                }
            }
            $producto=Producto::create($data);
            
            // slug
            $n=0;
            $slug=str::slug($producto->nombre,"-");
            $slug_f=$slug;
            while(Producto::where('id','<>',$producto->id)->where('slug',$slug_f)->first()){
                $n++;
                $slug_f=$slug . '-' . $n;
            }
            $producto->update([
                'slug' => $slug_f
            ]);

            return redirect()->route('productos.edit', codifica($producto->id))->with("notificacion", __('administracion.grabado_exito') );

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
        $producto=Producto::find($id);
        $category=Category::find(session('category_id'));
        Session(['producto_id' => $id]);
        return view('administracion.productos.edit',['producto' => $producto, 'category' => $category]);
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'nombre' => 'required',
            'precio_base' => 'numeric|required',
            'precio' => 'numeric|required|lte:precio_base',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $producto=Producto::find($id);
            
            $data=$request->toArray();
            $data['activo']= $request->activo ? 1 : 0;
            $data['destacado']= $request->destacado ? 1 : 0;
            for($l=1;$l<=4;$l++){
                if($request->{'foto' . $l}){
                    $foto=$producto->{'foto' . $l};
                    if($foto<>'') $this->deleteFile('productos/' . $foto);
                    $data['foto' . $l] = $this->saveFile($request->{'foto' . $l}, 'productos/',(string)(date("YmdHis")) . (string)(rand(1,9)));
                }else{
                    unset($data['foto' . $l]);
                }
            }
            $producto->update($data);
                
            // slug
            $n=0;
            $slug=str::slug($producto->nombre,"-");
            $slug_f=$slug;
            while(Producto::where('id','<>',$producto->id)->where('slug',$slug_f)->first()){
                $n++;
                $slug_f=$slug . '-' . $n;
            }
            $producto->update([
                'slug' => $slug_f
            ]);

            return redirect()->route('productos.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $producto=Producto::find($id);
            for($l=1;$l<=4;$l++){
                $foto=$producto->{'foto' . $l};
                if($foto<>'') $this->deleteFile('productos/' . $foto);
            }
            $producto->delete();
            return redirect()->route('productos.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }

}
