<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

use App\User;

class PedidoRepository implements IPedido{
    //

    public function save(Request $request){

        $pedido = new Pedido();
        $pedido->user_id= $request->user_id;
        $pedido->save();
        $pedido_id = $pedido->id;
        $user= User::find($request->user_id);

        foreach( $user->carrinho->produtos as $p){
             $p->pivot->pedido_id = $pedido_id;
             $p->pivot->save();
        }

    }



    public function listAll(){
      return  Pedido::with('user','produtos')->get();
    }


}






   /*

     $this->repository->save($produto->id, ['created_at' => now(), 'quantidade' ]);
        $user = User::find($request->user_id);
        $carrinho = $user->carrinho;
        $carrinho->produtos()->attach($request->id, ['created_at' => now()]);


        $pedido= new Pedido;
        $pedido->user_id = $request->user_id;
        $pedido->save();
        $pedido->produtos()->attach($request->id, [ 'created_at' => now() ]);
*/
      //  return $pedido->id;
