<?php

namespace App\Imports;

use App\Models\Produtos\Produto;
use Maatwebsite\Excel\Concerns\ToModel;

class ProdutosImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        if ( $row[0] == 'GGREM') {
            return null;
        }

        return new Produto([
            'ggrem'             =>  $row[0],
            'avatar'            =>  $row[0] . '.jpg',
            'principio_ativo'   =>  $row[1],
            'nome'              =>  $row[2],
            'laboratorio'       =>  $row[3],
            'apresentacao'      =>  $row[4],
            'valor_unitario'    =>  $row[5],
            'estoque_inicial'   =>  $row[6],
        ]);
    }
}



