<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use App\Carro;
use App\Foto;
use App\Order;
use Illuminate\Support\Facades\Mail;
class FotoController extends Controller
{

    public function index()
    {
        if($carro=Carro::find(session('carro_id'))){
            //$fotos=Foto::where('carro_id',session('carro_id'))->orderby('orden')->paginate(30);
            $fotos=Foto::where('carro_id',session('carro_id'))->orderby('orden')->get();
            return view('administracion.fotos.index',['fotos' => $fotos, 'carro' => $carro]);
        }
        return redirect()->route('administracion_home');
    }

    public function ordena_fotos(Request $request){
        $ids=explode(',',$request->ids);
        $orden=0;
        foreach ($ids as $id) {
            $orden++;
            Foto::find(decodifica($id))->update(['orden'=>$orden]);
        }
    }
    public function create()
    {
        if($carro=Carro::find(session('carro_id'))){
            return view('administracion.fotos.create',['carro' => $carro]);
        }
        return redirect()->route('administracion_home');
    }
    public function store(Request $request)
    {
        $rules = [
            'miniatura' => 'required',
            'img' => 'required',
        ];

        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()){
            return back()->withErrors($validator)->withInput();
        }
        
        $data=$request->toArray();
        if($request->img){
            $data['img'] = $this->saveFile($request->img, 'carros/galeria/',(string)(date("YmdHis")) . Str::random(1));
            $this->crea_webp('carros/galeria/',$data['img']);
        }
        if($request->miniatura){
            $data['miniatura'] = $this->saveFile($request->miniatura, 'carros/galeria/',(string)(date("YmdHis")) . Str::random(1));
            $this->crea_webp('carros/galeria/',$data['miniatura']);
        }
        $foto=Foto::create($data);

        return redirect()->route('fotos.edit', codifica($foto->id))->with("notificacion", __('administracion.grabado_exito') );

    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $id=decodifica($id);
        $foto=Foto::find($id);
        $carro=Carro::find(session('carro_id'));
        Session(['foto_id' => $id]);
        return view('administracion.fotos.edit',['foto' => $foto, 'carro' => $carro]);
    }

    public function update(Request $request, $id)
    {
        $id=decodifica($id);
        $foto=Foto::find($id);
        $data=$request->toArray();
        if($request->img){
            $img=$foto->img;
            if($img<>''){
                $this->deleteFile('carros/galeria/' . $img);
                $this->deleteFile('carros/galeria/' . nombre_wepb($img));
            }
            $data['img'] = $this->saveFile($request->img, 'carros/galeria/',(string)(date("YmdHis")) . Str::random(1));
            $this->crea_webp('carros/galeria/',$data['img']);
        }else{
            unset($data['img']);
        }
        if($request->miniatura){
            $img=$foto->miniatura;
            if($img<>''){
                $this->deleteFile('carros/galeria/' . $img);
                $this->deleteFile('carros/galeria/' . nombre_wepb($img));
            }
            $data['miniatura'] = $this->saveFile($request->miniatura, 'carros/galeria/',(string)(date("YmdHis")) . Str::random(1));
            $this->crea_webp('carros/galeria/',$data['miniatura']);
        }else{
            unset($data['miniatura']);
        }

        $foto->update($data);

        return redirect()->route('fotos.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $foto=Foto::find($id);
            $img=$foto->img;
            if($img<>''){
                $this->deleteFile('carros/galeria/' . $img);
                $this->deleteFile('carros/galeria/' . nombre_wepb($img));
            }
            $img=$foto->miniatura;
            if($img<>''){
                $this->deleteFile('carros/galeria/' . $img);
                $this->deleteFile('carros/galeria/' . nombre_wepb($img));
            }
            $foto->delete();
            return redirect()->route('fotos.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }

}
