<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('medicamentos')->group(function () {
    Route::get('/', 'MedicamentosController@index');
    Route::get('/{id}', 'MedicamentosController@show');
    Route::get('/search/{term}', 'MedicamentosController@search');
});

Route::prefix('pedidos')->group(function () {
	Route::post('/', 'PedidoController@store');
});
