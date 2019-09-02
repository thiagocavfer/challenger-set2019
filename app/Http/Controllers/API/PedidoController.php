<?php

namespace App\Http\Controllers\API;

use App\Models\Pedidos\Pedido;
use App\Models\Pedidos\IPedido;
use App\Models\Pedidos\FileHandler as PDF;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PedidoController extends Controller
{



    protected $repository;

    public function __construct(IPedido $repository)
    {
        $this->repository = $repository;
    }




    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        return $this->repository->listAll($request->user_id);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $pedido_id = $this->repository->save($request);
        return (new PDF($this->repository))->generatePDF($pedido_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pedidos\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function show(Pedido $pedido)
    {
        //
       return response()->json([ 'data' => $this->repository->orderDetails($pedido)]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pedidos\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pedido $pedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pedidos\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pedido $pedido)
    {
        //
    }




    public function printPDF($pedido_id){
      return  (new PDF($this->repository))->generatePDF($pedido_id);
    }




}
