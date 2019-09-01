<?php

namespace App\Models\Produtos;

use Illuminate\Database\Eloquent\Model;
use App\Models\Pedidos\Pedido;
use App\Models\Pedidos\Carrinho;


class Produto extends Model
{
    //

   protected $fillable=[
        'ggrem',
        'principio_ativo',
        'avatar',
        'nome',
        'laboratorio',
        'apresentacao',
        'valor_unitario',
        'estoque_inicial'
   ];





   public function pedidos(){
        return $this->belongsToMany(Pedido::class);
   }



    public function carrinhos()
    {
        return $this->belongsToMany(Carrinho::class);
    }


}
