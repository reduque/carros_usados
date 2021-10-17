<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');


Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', function () {
    return redirect()->route('home');
});


Route::get('/category', 'HomeController@category')->name('category');
Route::get('/single', 'HomeController@single')->name('single');



// ----------- administración

Route::get('admin/login', 'Auth\AdminLoginColtroller@showLoginForm')->name('admin.login');
Route::post('admin/login', 'Auth\AdminLoginColtroller@login')->name('admin.login.submit');

Route::get('administracion',function(){
    return redirect()->route('administracion_home');
});
Route::group(['middleware' => 'auth:admin'], function () {
	Route::namespace('administracion')->prefix('admin')->group(function () {
    	Route::get('/','HomeController@index')->name('administracion_home');

        Route::get('usuarios_eliminar/{id}', 'UserController@destroy')->name('usuarios_eliminar');
	    Route::get('edit_password/{id}', 'UserController@edit_password')->name('edit_password');
	    Route::put('update_password/{id}', 'UserController@update_password')->name('update_password');
	    Route::resource('usuarios', 'UserController');

		Route::get('banners_eliminar/{id}', 'BannerController@destroy')->name('banners_eliminar');
		Route::get('ordena_banners', 'BannerController@ordena_banners')->name('ordena_banners');
		Route::resource('banners', 'BannerController');

        Route::get('marcas_eliminar/{id}', 'MarcaController@destroy')->name('marcas_eliminar');
	    Route::resource('marcas', 'MarcaController');

		Route::get('modelos_eliminar/{id}', 'ModeloController@destroy')->name('modelos_eliminar');
	    Route::resource('modelos', 'ModeloController');

		Route::get('carros_eliminar/{id}', 'CarroController@destroy')->name('carros_eliminar');
	    Route::resource('carros', 'CarroController');
		Route::get('carros_modelos', 'CarroController@carros_modelos')->name('carros_modelos');
		Route::get('carros_puntos', 'CarroController@carros_puntos')->name('carros_puntos');


		Route::get('fotos_eliminar/{id}', 'FotoController@destroy')->name('fotos_eliminar');
	    Route::resource('fotos', 'FotoController');


    });
});

Route::get('borrar/borrar', 'BorrarController@borrar')->name('borrar_procesar');

/*
Route::group(['middleware' => 'auth:admin'], function (){
    */