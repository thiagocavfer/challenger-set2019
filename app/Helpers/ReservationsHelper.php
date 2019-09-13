<?php
declare(strict_types=1);

namespace App\Helpers;

class ReservationsHelper
{
    /**
     * Multiplica o valor unitário pela quantidade.
     *
     * @param string $unitValue
     * @param string $quantity
     * @return float
     */
    public static function quantityTimesUnitValue($unitValue, $quantity)
    {
        return (floatVal($unitValue) * intval($quantity));
    }

    /**
     * Calcula a quantidade total.
     *
     * @param array $medicines
     * @return int
     */
    public static function getTotalQuantity($medicines)
    {
        $totalQuantity = 0;
        for ($i = 0; $i < count($medicines); $i++) {
            $totalQuantity += $medicines[$i]['quantidade'];
        }

        return $totalQuantity;
    }

    /**
     * Calcula o total geral.
     *
     * @param array $medicines
     * @return int
     */
    public static function getFullValue($medicines)
    {
        $fullValue = 0;
        for ($i = 0; $i < count($medicines); $i++) {
            $fullValue += static::quantityTimesUnitValue(
                $medicines[$i]['valor_unitario'],
                $medicines[$i]['quantidade']
            );
        }

        return $fullValue;
    }
}
