<?php

namespace App\Http\Controllers;

use App\ItemPedido;
use App\Pedido;
use DB;
use Illuminate\Http\Request;
use Response;

class PedidoController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedido      = new Pedido();
        $dadosPedido = $request->all();
        $totalItens  = 0;
        $valorTotal  = 0;
        if (count($dadosPedido['itens']) > 0) {
            DB::beginTransaction();
            try {
                $pedido->save();
                foreach ($dadosPedido['itens'] as $item) {
                    $totalItens++;
                    $itemPedido = new ItemPedido($item);
                    Pedido::find($pedido->id)->itens()->save($itemPedido);
                    $valorTotal += $itemPedido->medicamento->valor_unitario;
                }
            } catch (\Exception $e) {
                DB::rollback();
                throw $e;
            }
            $pedido->valor_total = $valorTotal;
            $pedido->total_itens = $totalItens;
            $pedido->save();
            DB::commit();
        }
        return Response::json(['pedido_id' => $pedido->id]);
    }

    /**
     * @param $id
     */
    public function generatePDF($id)
    {
        $pedido = Pedido::find($id);
        return \PDF::loadView('pdf', compact('pedido'))
                ->setPaper('a4')
                ->download('pedido.pdf');
    }
}
