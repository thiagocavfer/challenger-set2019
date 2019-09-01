<?php

namespace App\Http\Controllers\API;

use App\Models\Produtos\Produto;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Produtos\IProduto;

use App\Http\Resources\Produtos\ProdutosCollection;
use App\Http\Resources\Produtos\ProdutosResource;

class ProdutoController extends Controller
{


    protected $repository;
    
    public function __construct(IProduto $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $data= $this->repository->listAll();
       return new ProdutosCollection($data);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function show(Produto $produto)
    {
        //
      return new ProdutosResource($produto);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produto $produto)
    {
        //
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produto $produto)
    {
        //
    }





}
