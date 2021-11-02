<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Banner;

class BannerController extends Controller
{

    public function index()
    {
        $banners=Banner::paginate(25);
        return view('administracion.banners.index',['banners' => $banners]);
    }

    public function ordena_banners(Request $request){
        $ids=explode(',',$request->ids);
        $orden=0;
        foreach ($ids as $id) {
            $orden++;
            Banner::find(decodifica($id))->update(['orden'=>$orden]);
        }
        //var_dump($request->ids);
    }

    public function create()
    {
        return view('administracion.banners.create');
    }

    public function store(Request $request)
    {
        $rules = [
            'title' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $img = "";
            if($request->img){
                $img = $this->saveFile($request->img, 'banners/',(string)(date("YmdHis")) . Str::random(1));
            }
            $active = ($request->active == 1) ? 1 : 0 ;
            $banner=Banner::create([
                'title' => $request->title,
                'link' => $request->link,
                'active' => $active,
                'img' => $img,
            ]);
            return redirect()->route('banners.edit', codifica($banner->id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (Exception $e) {
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
        $banner=Banner::find($id);
        session(['project_id' => $id]);
        return view('administracion.banners.edit',['banner' => $banner]);
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'title' => 'required',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $banner=Banner::find($id);
            $img = $banner->img;
            if($request->img){
                if($img<>'')
                    $this->deleteFile('banners/' . $img);
                $img = $this->saveFile($request->img, 'banners/',(string)(date("YmdHis")) . Str::random(1));
            }

            $active = ($request->active == 1) ? 1 : 0 ;
            $banner->update([
                'title' => $request->title,
                'link' => $request->link,
                'active' => $active,
                'img' => $img,
            ]);
            return redirect()->route('banners.edit', codifica($id))->with("notificacion", __('administracion.grabado_exito') );

        } catch (Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            $banner=Banner::find($id);
            $img = $banner->img;
            if($img<>'')
                $this->deleteFile('banners/' . $img);

            $banner->delete();
            return redirect()->route('banners.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error", __('administracion.error_eliminando') );
        }
    }
}
