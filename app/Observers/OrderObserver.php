<?php

namespace App\Observers;

use App\Order;

class OrderObserver
{
    public function creating(Order $order)
    {
        $order->fill([
            'codigo' => $this->uniqueCode()
        ]);
    }

    private function uniqueCode()
    {
        $now = new \DateTime();

        return $now->format('HisudmY');
    }
}
