<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

 interface IPedido{

    public function save(Request $request);
    public function listAll($user_id= '');
    public function orderDetails(Pedido $pedido);

}
