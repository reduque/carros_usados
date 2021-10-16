<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Producto;
use App\Banner;

class HomeController extends Controller
{
    public function index()
    {
        return view('home', [
            'categorias' => Category::orderby('orden')->get(),
            'productos' => Producto::where('activo',1)->where('destacado',1)->inRandomOrder()->limit(8)->get(),
            'banners' => Banner::where('active',1)->orderby('orden')->get(),
        ]);
    }
    public function carga_categorias_menu(){
        $salida='';
        foreach(Category::orderby('orden')->get() as $categoria){
            $salida.='<a href="' . route('categoria', $categoria->slug) . '">' . $categoria->nombre . '</a>';
        }
        return ['salida' => $salida];
    }
    public function tyc()
    {
        return view('tyc');
    }

}
