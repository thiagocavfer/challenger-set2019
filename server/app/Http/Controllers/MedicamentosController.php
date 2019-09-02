<?php

namespace App\Http\Controllers;

use App\Medicamento;
use Illuminate\Http\Request;
use Response;

class MedicamentosController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medicamentos = Medicamento::all();
        return Response::json(array('data' => $medicamentos));
    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $medicamento = Medicamento::find($id);
        return Response::json(array('data' => $medicamento));
    }

    /**
     * @param  string  $term
     * @return \Illuminate\Http\Response
     */
    public function search($term)
    {
        $medicamentos = Medicamento::search($term)->get();
        return Response::json(array('data' => $medicamentos));        
    }

}
