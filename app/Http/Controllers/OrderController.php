<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Order;
use App\OrderMedicines;

class OrderController extends Controller
{
    /**
     * Cria novo pedido de reserva.
     *
     * @param Request $request
     */
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

            return $this->buildPdf(
                $order->codigo,
                $medicines
            );
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }

    /**
     * Constrói novo PDF.
     *
     * @param Order $order
     * @param array $medicines
     */
    private function buildPdf($code, $medicines)
    {
        $options = new Options();
        $options->set('defaultFont', 'Helvetica')
            ->set('defaultPaperSize', 'a4')
            ->set('defaultPaperOrientation', 'landscape')
            ->set('fontHeightRatio', 1)
            ->set('isJavascriptEnabled', false);
        
        $pdf = new Dompdf($options);
        $pdf->loadHtml(
            view(
                'order',
                array(
                    'code' => $code,
                    'medicines' => $medicines,
                )
            )->render()
        );
        $pdf->render();

        return $pdf->stream();
    }

    /**
     * Verificação do input do novo pedido de reserva.
     *
     * @param array $medicines
     * @return bool
     */
    private function verifyInput($medicines)
    {
        if (!is_array($medicines)) {
            return false;
        }

        for ($i = 0; $i < count($medicines); $i++) {
            if (!is_array($medicines[$i])
                || !array_key_exists('nome', $medicines[$i])
                || !array_key_exists('laboratorio', $medicines[$i])
                || !array_key_exists('valor_unitario', $medicines[$i])
                || !array_key_exists('quantidade', $medicines[$i])
                || !$medicines[$i]['nome']
                || !$medicines[$i]['laboratorio']
                || !$medicines[$i]['valor_unitario']
                || !$medicines[$i]['quantidade']
            ) {
                return false;
            }
        }

        return true;
    }
}
