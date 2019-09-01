<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

use App\User;

class CarrinhoRepository implements ICarrinho{
    //

    public function save(Request $request){


        $carrinho = (User::find($request->user_id))->carrinho;
        $carrinho->produtos()->attach($request->id, [ 'quantidade' => $request->unid ,'created_at' => now()]);

        /*
        $pedido= new Pedido;
        $pedido->user_id = $request->user_id;
        $pedido->save();
        $pedido->produtos()->attach($request->id, [ 'created_at' => now() ]);
*/
      //  return $pedido->id;
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
