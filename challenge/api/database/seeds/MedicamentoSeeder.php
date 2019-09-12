<?php

use Illuminate\Database\Seeder;

class MedicamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
       $this->command->info("Criando registros de medicamentos!");

       DB::table('medicamentos')->insert([
           'ggrem'            => '526116090097406',
           'principio_ativo'  => 'ACEBROFILINA',
           'nome_medicamento' => 'ACEBROFILINA',
           'nome_laboratorio' => 'GERMED',
           'apresentacao'     => '10 MG/ML XPE CT FR PLAS AMB X 120 ML + COP',
           'valor_unitario'   => '123,40',
           'qtd_estoque'      => '100'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '500501203135316',
           'principio_ativo'  => 'ACEBROFILINA',
           'nome_medicamento' => 'BRONDILAT',
           'nome_laboratorio' => 'ACHÉ',
           'apresentacao'     => '5 MG/ML XPE CT FR PLAS PET AMB X 60 ML + CP MED X 10 ML',
           'valor_unitario'   => '28,90',
           'qtd_estoque'      => '120'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '508011305115313',
           'principio_ativo'  => 'ACECLOFENACO',
           'nome_medicamento' => 'PROFLAM',
           'nome_laboratorio' => 'EUROFARMA',
           'apresentacao'     => '100 MG COM REV CT BL AL / AL X 6',
           'valor_unitario'   => '45,80',
           'qtd_estoque'      => '45'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '544117080004101',
           'principio_ativo'  => 'BLINATUMOMABE',
           'nome_medicamento' => 'BLINCYTO',
           'nome_laboratorio' => 'AMGEN BIOTECNOLOGIA',
           'apresentacao'     => '38,5 MCG PO LIOF SOL INJ CT FA VD TRANS + 1 FA SOL ESTABIL X 10 ML',
           'valor_unitario'   => ' 239,65',
           'qtd_estoque'      => '80'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '500900401178310',
           'principio_ativo'  => 'BRINZOLAMIDA',
           'nome_medicamento' => 'AZOPT',
           'nome_laboratorio' => 'NOVARTIS',
           'apresentacao'     => '10 MG/ML SUS OFT CT FR PLAS TRANS GOT X 5 ML',
           'valor_unitario'   => '89,15',
           'qtd_estoque'      => '400'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '527900609110414',
           'principio_ativo'  => 'CAPTOPRIL',
           'nome_medicamento' => 'CAPTOSEN',
           'nome_laboratorio' => 'PHARLAB',
           'apresentacao'     => '12,5 MG COM CT BL AL PLAS INC X 900 (EMB HOSP)',
           'valor_unitario'   => '35,69',
           'qtd_estoque'      => '250'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '510603401154314',
           'principio_ativo'  => 'CEFTAZIDIMA',
           'nome_medicamento' => 'FORTAZ',
           'nome_laboratorio' => 'GLAXOSMITHKLINE',
           'apresentacao'     => '1G PO INJ CT 01 FA VD INC + DIL 10 ML',
           'valor_unitario'   => '1.230,95',
           'qtd_estoque'      => '450'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '526512010116317',
           'principio_ativo'  => 'CLOXAZOLAM',
           'nome_medicamento' => 'OLCADIL',
           'nome_laboratorio' => 'NOVARTIS',
           'apresentacao'     => '2 MG COM CT BL AL/AL X 30',
           'valor_unitario'   => '39,90',
           'qtd_estoque'      => '130'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '540713080001914',
           'principio_ativo'  => 'DIATRIZOATO DE MEGLUMINA',
           'nome_medicamento' => 'RELIEV',
           'nome_laboratorio' => 'BRACCO',
           'apresentacao'     => '600 MG/ML SOL INJ CX 25 FA X 20 ML',
           'valor_unitario'   => '67,85',
           'qtd_estoque'      => '170'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '506714001156417',
           'principio_ativo'  => 'DIAZOXIDE',
           'nome_medicamento' => 'PROGLYCEN',
           'nome_laboratorio' => 'TEVA',
           'apresentacao'     => '15 MG/ML SOL INJ CT AMP VD TRANS X 20 ML',
           'valor_unitario'   => '45,90',
           'qtd_estoque'      => '250'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '500205801112313',
           'principio_ativo'  => 'ESTAZOLAM',
           'nome_medicamento' => 'NOCTAL',
           'nome_laboratorio' => 'ABBOTT',
           'apresentacao'     => '2 MG COM CT BL AL PLAS INC X 20',
           'valor_unitario'   => '145,25',
           'qtd_estoque'      => '20'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '529203401115317',
           'principio_ativo'  => 'FEMPROCUMONA',
           'nome_medicamento' => 'MARCOUMAR',
           'nome_laboratorio' => 'ROCHE',
           'apresentacao'     => '3 MG COM FR VD AMB X 25',
           'valor_unitario'   => '46,00',
           'qtd_estoque'      => '320'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '502805201112311',
           'principio_ativo'  => 'FENOBARBITAL',
           'nome_medicamento' => 'GARDENAL',
           'nome_laboratorio' => 'SANOFI-AVENTIS',
           'apresentacao'     => '100 MG COM CT BL AL PLAS INC X 20',
           'valor_unitario'   => '88,40',
           'qtd_estoque'      => '50'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '520727101117111',
           'principio_ativo'  => 'FENOBARBITAL',
           'nome_medicamento' => 'FENOBARBITAL',
           'nome_laboratorio' => 'TEUTO',
           'apresentacao'     => '100 MG COM CT BL AL PLAS TRANS X 30',
           'valor_unitario'   => '37,79',
           'qtd_estoque'      => '20'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '520716060103803',
           'principio_ativo'  => 'GLIMEPIRIDA',
           'nome_medicamento' => 'AMAGLYN',
           'nome_laboratorio' => 'TEUTO',
           'apresentacao'     => '1 MG COM CT BL AL PLAS INC X 30',
           'valor_unitario'   => '29,20',
           'qtd_estoque'      => '120'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '511000307154414',
           'principio_ativo'  => 'IOBITRIDOL',
           'nome_medicamento' => 'HENETIX',
           'nome_laboratorio' => 'GUERBET',
           'apresentacao'     => '300 MG/ML SOL INJ CT FA VD INC X 50 ML',
           'valor_unitario'   => '189,47',
           'qtd_estoque'      => '100'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '538912120020114',
           'principio_ativo'  => 'IOPROMIDA',
           'nome_medicamento' => 'ULTRAVIST',
           'nome_laboratorio' => 'BAYER',
           'apresentacao'     => '623,40 MG/ML SOL INJ CX 10 FA VD INC X 50 ML',
           'valor_unitario'   => '325,45',
           'qtd_estoque'      => '100'
       ]);

       DB::table('medicamentos')->insert([
           'ggrem'            => '529204901111319',
           'principio_ativo'  => 'ISOTRETINOÍNA',
           'nome_medicamento' => 'ROACUTAN',
           'nome_laboratorio' => 'ROCHE',
           'apresentacao'     => '10 MG CAP GEL MOLE CT BL AL X 30',
           'valor_unitario'   => '12,90',
           'qtd_estoque'      => '400'
       ]);
     }
}
