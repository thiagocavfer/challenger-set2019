<?php

namespace App\Models\Produtos;



class ProdutoRepository implements IProduto{
    //

    public function listAll($orderBy = 'nome', $order = 'asc')
    {
       return Produto::orderBy($orderBy, $order)->get();
    }


    public function search($param , $orderBy='nome', $order= 'asc'){

        return Produto::where('nome', 'like', $param."%")
                  ->orWhere('laboratorio', 'like', $param."%")
                    ->orWhere('principio_ativo', 'like', $param."%")
                      ->orderBy($orderBy, $order)
                         ->get();


   }


}
