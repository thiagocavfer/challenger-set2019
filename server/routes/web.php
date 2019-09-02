<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('medicamentos')->group(function () {
    Route::get('/', 'MedicamentosController@index');
    Route::get('/{id}', 'MedicamentosController@show');
    Route::get('/search/{term}', 'MedicamentosController@search');
});

Route::prefix('pedidos')->group(function () {
	Route::post('/', 'PedidoController@store');
});
