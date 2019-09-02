<?php

namespace App\Http\Controllers\API;

use App\Models\Produtos\Produto;
use Illuminate\Http\Request;
use App\Models\Produtos\IProduto;

use App\Http\Resources\Produtos\ProdutosCollection;
use App\Http\Resources\Produtos\ProdutosResource;

class ProdutoSearchController  extends ProdutoController
{





    public function __construct(IProduto $repository)
    {
        parent::__construct($repository);
    }



    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function listOrderBy($orderBy, $order = 'asc')
    {
        $data = $this->repository->listAll($orderBy, $order);
        return new ProdutosCollection($data);
    }





    public function search($param){
        $data = $this->repository->search($param);
        return new ProdutosCollection($data);
    }



    public function searchOrder($param, $orderBy, $order='asc')
    {
        $data = $this->repository->search($param, $orderBy, $order);
        return new ProdutosCollection($data);
    }



}
