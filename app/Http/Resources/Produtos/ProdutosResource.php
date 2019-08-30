<?php

namespace App\Http\Resources\Produtos;

use Illuminate\Http\Resources\Json\JsonResource;

class ProdutosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
