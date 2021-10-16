<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Producto;

class ProductoController extends Controller
{
    public function productos_home(){
        $productos = Producto::where('activo',1)->where('destacado',1)->inRandomOrder()->limit(12)->get();
        return $productos;
    }
}
