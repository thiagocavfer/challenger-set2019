<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

 interface ICarrinho{

    public function save(Request $request);
    public function listAll($user_id);

}
