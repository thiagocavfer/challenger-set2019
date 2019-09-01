<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medicine;
use App\Http\Resources\MedicineCollection;

class MedicineController extends Controller
{
    public function show(Request $request) {
        if($request->query('filtro')) {
            $filter = $request->query('filtro');

            return new MedicineCollection(
                Medicine::query()
                    ->where('nome', 'LIKE', "%{$filter}%")
                    ->orWhere('principio_ativo', 'LIKE', "%{$filter}%")
                    ->orWhere('laboratorio', 'LIKE', "%{$filter}%")
                    ->get()
            );
        }

        return new MedicineCollection(Medicine::all());
    }
}
