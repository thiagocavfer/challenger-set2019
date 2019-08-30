<?php

namespace App\Models\Pedidos;

use Illuminate\Database\Eloquent\Model;
use App\Models\Produtos\Produto;
use App\User;

class Pedido extends Model
{
    //

    public function produtos(){
       return $this->belongsToMany(Produto::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
