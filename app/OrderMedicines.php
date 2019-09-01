<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderMedicines extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'order_id', 'nome', 'laboratorio', 'valor_unitario', 'quantidade'
    ];
}
