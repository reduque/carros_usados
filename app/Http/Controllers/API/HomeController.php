<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class HomeController extends Controller
{
    public function categorias_home()
    {
        $categorias=Category::orderby('orden')->get();
        return $categorias;
    }
}
