<?php

namespace App\Models\Pedidos;

use Illuminate\Http\Request;

use App\User;

class PedidoRepository implements IPedido{
    //

    public function save(Request $request){

        //
        $user= User::find($request->user_id);
        $pedido = new Pedido();
        $pedido->user()->associate($user);
        $pedido->save();
        foreach($user->carrinho->produtos as $p){
           //
           $pivotData= ['quantidade' => $p->pivot->quantidade, 'valor_unitario' => $p->valor_unitario];

           $p->estoque_inicial = ($p->estoque_inicial - $p->pivot->quantidade);
           $p->save();

           $pedido->produtos()->save($p, $pivotData);
        }
        $user->pedidos()->save($pedido);
        $user->carrinho->produtos()->detach();

        return $pedido->id;
    }



    public function listAll($user_id= ''){
       if($user_id == ''){
          return  Pedido::with('user','produtos')->get();
        }else{
        return Pedido::with('produtos')->where('user_id', '=', $user_id)->get();
       }
    }



    public function orderDetails(Pedido $pedido)
    {
        return [
            'pedido' => $pedido,
            'produtos'=> $pedido->produtos()->get(),
        ];
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
