<?php

namespace App\Http\Controllers;

use App\Medicine;
use App\Http\Resources\MedicineCollection;

class MedicineController extends Controller
{
    public function show()
    {
        return new MedicineCollection(Medicine::all());
    }
}
