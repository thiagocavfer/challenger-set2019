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

Route::get('/medicamentos', 'MedicineController@show');
Route::post('/calcular-valor-total', 'ReservationsController@getTotalValue');
Route::post(
    '/calcular-quantidade-total',
    'ReservationsController@getTotalQuantity'
);
Route::post('/calcular-total-geral', 'ReservationsController@getFullValue');
Route::post('/reservar', 'OrderController@create');
