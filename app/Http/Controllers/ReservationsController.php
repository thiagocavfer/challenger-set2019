<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
            return $this->quantityTimesUnitValue($unitValue, $quantity);
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
        $quantities = $request->input('quantidades');

        if (true === $this->verifyTotalQuantityInput($quantities)) {
            return array_sum($quantities);
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
        $unitValues = $request->input('valores_unitarios');
        $quantities = $request->input('quantidades');

        if (true === $this->verifyFullValueInput($unitValues, $quantities)) {
            $fullValue = 0;
            for ($i = 0; $i < count($unitValues); $i++) {
                $fullValue += $this->quantityTimesUnitValue(
                    $unitValues[$i],
                    $quantities[$i]
                );
            }

            return $fullValue;
        }

        return response('A verificação do input não foi bem-sucedida.', 400);
    }

    private function quantityTimesUnitValue($unitValue, $quantity)
    {
        return (floatVal($unitValue) * intval($quantity));
    }
    
    /**
     * Verificação o input do valor total.
     *
     * @param $unitValue
     * @param $quantity
     * @return bool
     */
    private function verifyTotalValueInput($unitValue, $quantity)
    {
        return ($unitValue && $quantity);
    }

    /**
     * Verificação o input da quantidade total.
     *
     * @param $quantities
     * @return bool
     */
    private function verifyTotalQuantityInput($quantities)
    {
        return is_array($quantities);
    }

    /**
     * Verificação o input do total geral.
     *
     * @param $unitValues
     * @param $quantities
     * @return bool
     */
    private function verifyFullValueInput($unitValues, $quantities)
    {
        return (is_array($unitValues) && is_array($quantities));
    }
}
