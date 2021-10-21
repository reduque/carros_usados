<?php
namespace App\Http\ViewComposers;

use Illuminate\View\View;
use App\Marca;

class MarcaComposer{
	public function compose(View $view){
		$marcas=Marca::wherehas('carros')->get();
		$view->with('marcas', $marcas);
	}
}