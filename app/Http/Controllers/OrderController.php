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
