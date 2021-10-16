<?php

namespace App\Http\Controllers\administracion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Administrator;

class UserController extends Controller
{
    public function index()
    {
        $usuarios=Administrator::where('id','<>','1')->paginate(20);
        return view('administracion.usuarios.index')->with('usuarios',$usuarios);
    }

    public function create()
    {
        return view('administracion.usuarios.create');
    }

    public function store(Request $request)
    {
        $rules = [
            'email' => 'required|email|unique:administrators,email',
            'password' => 'required|string|min:6|confirmed',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $usuario=$request->toArray();
            $usuario['password']=bcrypt($usuario['password']);
            $usuario=Administrator::create([
                'name' => $usuario['name'],
                'email' => $usuario['email'],
                'password' => $usuario['password'],
            ]);
            return redirect()->route('usuarios.edit', codifica($usuario->id))->with("notificacion",__('administracion.grabado_exito'));

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
        $usuario=Administrator::find(decodifica($id));
        return view('administracion.usuarios.edit')->with('usuario',$usuario);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'email' => 'required|email',
            ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $data=[
                'name' => $request->name,
            ];
            Administrator::find($id)->update($data);
            return redirect()->route('usuarios.edit', codifica($id))->with("notificacion",__('administracion.grabado_exito'));

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function destroy($id)
    {
        $id=decodifica($id);
        try{
            Administrator::find($id)->delete();
            return redirect()->route('usuarios.index');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->with("notificacion_error","Se ha producido un error, es probable que exista contenido relacionado a este registro que impide que se elimine");
        }
    }
    public function edit_password($id)
    {
        $usuario=Administrator::find(decodifica($id));
        return view('administracion.usuarios.edit_password')->with('usuario',$usuario);
    }
    public function update_password(Request $request, $id)
    {
        $rules = [
            'password' => 'required|string|min:6|confirmed',
        ];

        try {
            $validator = \Validator::make($request->all(), $rules);
            if ($validator->fails()){
                return back()->withErrors($validator)->withInput();
            }
            $id=decodifica($id);
            $data=[
                'password' => bcrypt($request->password),
            ];
            Administrator::find($id)->update($data);
            return redirect()->route('edit_password', ["id" => codifica($id)])->with("notificacion",__('administracion.grabado_exito'));

        } catch (\Exception $e) {
            \Log::info('Error creating item: '.$e);
            return \Response::json(['created' => false], 500);
        }
    }

    public function suplantarusuario($idusuario)
    {
        Auth::loginUsingId(decodifica($idusuario), true);
        return redirect()->route('home');
    }

}
