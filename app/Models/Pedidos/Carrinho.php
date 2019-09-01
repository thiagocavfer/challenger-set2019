<?php

namespace App\Models\Pedidos;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Produtos\Produto;

class Carrinho extends Model
{
    //




    public function user()
    {
        return $this->belongsTo(User::class);
    }



    public function produtos()
    {
        return $this->belongsToMany(Produto::class)->withPivot('quantidade');
    }



}
