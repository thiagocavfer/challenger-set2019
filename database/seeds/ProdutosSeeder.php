<?php

use Illuminate\Database\Seeder;

use App\Imports\ProdutosImport;

use Maatwebsite\Excel\Facades\Excel;

class ProdutosSeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $this->import();
    }



    public function import()
    {
      try{

        Excel::import(new ProdutosImport, storage_path('app/public/lista_medicamentos.xlsx'));

      }catch(Exception $e){

            $file = 'error.log';
            $handle = fopen($file, 'w') or die('Arquivo não encontrado: -> ' . $file);
            $data =   $e;
            fwrite($handle, $data);
      }
    }


}

