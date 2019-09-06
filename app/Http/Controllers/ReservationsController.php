<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\ReservationsHelper;

class ReservationsController extends Controller
{
    /**
     * Calcula valor total.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getTotalValue(Request $request)
    {
        $unitValue = $request->input('valor_unitario');
        $quantity = $request->input('quantidade');

        if (true === $this->verifyTotalValueInput($unitValue, $quantity)) {
            return ReservationsHelper::quantityTimesUnitValue(
                $unitValue,
                $quantity
            );
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }

    /**
     * Calcula quantidade total.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getTotalQuantity(Request $request)
    {
        $medicines = $request->input('medicines');

        if (true === $this->verifyTotalQuantityInput($medicines)) {
            return ReservationsHelper::getTotalQuantity($medicines);
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }

    /**
     * Calcula total geral.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getFullValue(Request $request)
    {
        $medicines = $request->input('medicines');

        if (true === $this->verifyFullValueInput($medicines)) {
            return ReservationsHelper::getFullValue($medicines);
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }
    
    /**
     * Verificação do input do valor total.
     *
     * @param string $unitValue
     * @param string $quantity
     * @return bool
     */
    private function verifyTotalValueInput($unitValue, $quantity)
    {
        return ($unitValue && $quantity);
    }

    /**
     * Verificação do input da quantidade total.
     *
     * @param array $medicines
     * @return bool
     */
    private function verifyTotalQuantityInput($medicines)
    {
        if (!is_array($medicines)) {
            return false;
        }

        for ($i = 0; $i < count($medicines); $i++) {
            if (!is_array($medicines[$i])
                || !array_key_exists('quantidade', $medicines[$i])
                || !$medicines[$i]['quantidade']
            ) {
                return false;
            }
        }

        return true;
    }

    /**
     * Verificação do input do total geral.
     *
     * @param array $medicines
     * @return bool
     */
    private function verifyFullValueInput($medicines)
    {
        if (!is_array($medicines)) {
            return false;
        }

        for ($i = 0; $i < count($medicines); $i++) {
            if (!is_array($medicines[$i])
                || !array_key_exists('valor_unitario', $medicines[$i])
                || !array_key_exists('quantidade', $medicines[$i])
                || !$medicines[$i]['valor_unitario']
                || !$medicines[$i]['quantidade']
            ) {
                return false;
            }
        }

        return true;
    }
}
