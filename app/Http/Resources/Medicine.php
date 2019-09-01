<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Medicine extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'ggrem' => $this->ggrem,
            'principio_ativo' => $this->principio_ativo,
            'avatar' => $this->avatar,
            'nome' => $this->nome,
            'laboratorio' => $this->laboratorio,
            'apresentacao' => $this->apresentacao,
            'valor_unitario' => $this->valor_unitario,
            'estoque_inicial' => $this->estoque_inicial,
        ];
    }
}
