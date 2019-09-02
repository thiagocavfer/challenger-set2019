<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

use App\User;

class CarrinhoRepository implements ICarrinho{
    //

    public function save(Request $request){


        $carrinho = (User::find($request->user_id))->carrinho;
        $pivotData= ['quantidade' => $request->unid, 'valor_unitario' => $request->valor_unitario, 'created_at' => now()];
        $carrinho->produtos()->attach($request->produto_id, $pivotData);

    }




    public function listAll($user_id){

      $user= User::find($user_id);
       $data=[
        'carrinho' => $user->carrinho()->get()->first(),
        'produtos' => $user->carrinho->produtos()->get(),
       ];

       return $data;
    }

//

}
