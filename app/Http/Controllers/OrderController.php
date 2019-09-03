<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use App\Order;
use App\OrderMedicines;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        $medicines = $request->input('medicamentos');

        if (true === $this->verifyInput($medicines)) {
            $order = Order::create();
            foreach ($medicines as $medicine) {
                OrderMedicines::create([
                    'order_id' => $order->id,
                    'nome' => $medicine['nome'],
                    'laboratorio' => $medicine['laboratorio'],
                    'valor_unitario' => $medicine['valor_unitario'],
                    'quantidade' => $medicine['quantidade'],
                ]);
            }

            return $this->getPdf($order, $medicines);
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }

    private function verifyInput($medicines)
    {
        return (
            is_array($medicines)
            && array_key_exists('nome', $medicines)
            && array_key_exists('laboratorio', $medicines)
            && array_key_exists('valor_unitario', $medicines)
            && array_key_exists('quantidade', $medicines)
            && $medicines['nome']
            && $medicines['laboratorio']
            && $medicines['valor_unitario']
            && $medicines['quantidade']
        );
    }

    private function getPdf($order, $medicines)
    {
        $pdf = App::make('dompdf.wrapper');
        $pdf->loadView('order', [
            'codigo' => $order->codigo,
            'medicines' => $medicines
        ]);

        return $pdf->stream();
    }
}
