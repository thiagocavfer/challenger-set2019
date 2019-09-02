<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemPedido extends Model
{
	public $timestamps = false;
	
	protected $fillable = ['quantidade', 'pedido_id', 'medicamento_id'];

    public function pedido()
    {
        return $this->belongsTo('App\Pedido');
    }

    public function medicamento()
    {
        return $this->belongsTo('App\Medicamento');
    }
    
}
