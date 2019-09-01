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

//
$routes = [
    '/produtos' => 'API\ProdutoController',
    '/pedidos' => 'API\PedidoController',
    '/carrinhos' => 'API\CarrinhoController',
];

//
Route::apiResources($routes);


//
Route::prefix('produtos')->name('produtos.')->group(function(){
    Route::get('/order-by/{param}/{order?}', 'API\ProdutoSearchController@listOrderBy')->name('list.orderBy');
    Route::get('/search/{param}', 'API\ProdutoSearchController@search')->name('search');
    Route::get('/search/{param}/{orderby}/{order?}', 'API\ProdutoSearchController@searchOrder')->name('search.order');
});




