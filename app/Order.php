<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\OrderMedicines;

class Order extends Model
{   
    protected $fillable = ['codigo'];
    
    public function medicines() {
        return $this->hasMany(OrderMedicines::class);
    }
}
