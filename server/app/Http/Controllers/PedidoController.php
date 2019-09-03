<?php

namespace App\Http\Controllers;

use App\Pedido;
use App\ItemPedido;
use Illuminate\Http\Request;
use Response;
use DB;

class PedidoController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedido = new Pedido;
        $dadosPedido = $request->all();
        $totalItens = 0;
        $valorTotal = 0;
        if (count($dadosPedido['itens']) > 0) {
            DB::beginTransaction(); 
            try{
               $pedido->save();
               foreach ($dadosPedido['itens'] as $item) {
                    $totalItens ++;
                    $itemPedido = new ItemPedido($item);
                    Pedido::find($pedido->id)->itens()->save($itemPedido);
                    $valorTotal += $itemPedido->medicamento->valor_unitario;
               }
            }
            catch(\Exception $e)
            {
               DB::rollback();
               throw $e;
            }
            $pedido->valor_total = $valorTotal;
            $pedido->total_itens = $totalItens;
            $pedido->save();
            DB::commit();
        }
        return Response::json(array('data' => ['success' => true]));
    }
}
