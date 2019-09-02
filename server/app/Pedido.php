<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
	public $timestamps = false;
	
	protected $fillable = ['total_itens', 'valor_total'];

    public function itens()
    {
        return $this->hasMany('App\ItemPedido');
    }
}
