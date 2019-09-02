<?php

namespace App\Http\Controllers\API;

use App\Models\Pedidos\Carrinho;
use App\Models\Pedidos\ICarrinho;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class CarrinhoController extends Controller
{




    protected $repository;

    public function __construct(ICarrinho $repository)
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
       $data= $this->repository->listAll($request->user_id);
       return response()->json(['data' => $data]);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->repository->save($request);
        return  response()->json(['data' => ['message' => 'success']]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pedidos\Carrinho  $carrinho
     * @return \Illuminate\Http\Response
     */
    public function show(Carrinho $carrinho)
    {
        //
        $data = $this->repository->listAll($carrinho->user_id);
        return response()->json(['data' => $data]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pedidos\Carrinho  $carrinho
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carrinho $carrinho)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pedidos\Carrinho  $carrinho
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carrinho $carrinho, Request $request)
    {
        //
        $carrinho->produtos()->detach($request->produto_id);
        return 'removido';
    }
}
