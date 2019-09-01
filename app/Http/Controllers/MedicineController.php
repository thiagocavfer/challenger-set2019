<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medicine;
use App\Http\Resources\MedicineCollection;

class MedicineController extends Controller
{
    public function show(Request $request) {
        $query = Medicine::query();

        if($filter = $request->query('filtro')) {
            $query = $query
                ->where('nome', 'LIKE', "%{$filter}%")
                ->orWhere('principio_ativo', 'LIKE', "%{$filter}%")
                ->orWhere('laboratorio', 'LIKE', "%{$filter}%");
        }

        if(($orderBy = $request->query('ordenar_por'))
            && ($orderBy == 'nome' || $orderBy == 'valor_unitario')
        ) {
            $direction = ($request->query('direção') == 'desc') ? 'desc': 'asc';
            $query = $query->orderBy($orderBy, $direction);
        }

        return new MedicineCollection($query->get());
    }
}
