<?php

namespace App\Http\Resources\Produtos;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProdutosCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'data' => $this->collection->transform(function($produto){
                return [
                    'id' => $produto->id,
                    'ggrem' => $produto->ggrem,
                    'avatar' => $produto->avatar,
                    'principio_ativo' => $produto->principio_ativo,
                    'nome' => $produto->nome,
                    'laboratorio' => $produto->laboratorio,
                    'apresentacao' => $produto->apresentacao,
                    'valor_unitario'  => $produto->valor_unitario,
                    'estoque_inicial' => $produto->estoque_inicial,
                ];
            }),
        ];

    }
}



