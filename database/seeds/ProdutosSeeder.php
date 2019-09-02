<?php

use Illuminate\Database\Seeder;

use App\Models\Produtos\Produto;

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
        Produto::create([
            'ggrem' => '526116090097406',
            'principio_ativo' => 'ACEBROFILINA',
            'avatar' => '526116090097406.jpg',
            'nome' => 'ACEBROFILINA',
            'laboratorio' => 'GERMED',
            'apresentacao' => '10 MG/ML XPE CT FR PLAS AMB X 120 ML + COP',
            'valor_unitario' => 123.40,
            'estoque_inicial' => 100
        ]);

        Produto::create([
            'ggrem' => '500501203135316',
            'principio_ativo' => 'ACEBROFILINA',
            'avatar' => '500501203135316.jpg',
            'nome' => 'BRONDILAT',
            'laboratorio' => 'ACHÉ',
            'apresentacao' => '5 MG/ML XPE CT FR PLAS PET AMB X 60 ML + CP MED X 10 ML',
            'valor_unitario' => 28.90,
            'estoque_inicial' => 120
        ]);

        Produto::create([
            'ggrem' => '508011305115313',
            'principio_ativo' => 'ACECLOFENACO',
            'avatar' => '508011305115313.jpg',
            'nome' => 'PROFLAM',
            'laboratorio' => 'EUROFARMA',
            'apresentacao' => '100 MG COM REV CT BL AL / AL X 6',
            'valor_unitario' => 45.80,
            'estoque_inicial' => 45
        ]);

        Produto::create([
            'ggrem' => '544117080004101',
            'principio_ativo' => 'BLINATUMOMABE',
            'avatar' => '544117080004101.jpg',
            'nome' => 'BLINCYTO',
            'laboratorio' => 'AMGEN BIOTECNOLOGIA',
            'apresentacao' => '38,5 MCG PO LIOF SOL INJ CT FA VD TRANS + 1 FA SOL ESTABIL X 10 ML',
            'valor_unitario' => 239.65,
            'estoque_inicial' => 80
        ]);


        Produto::create([
            'ggrem' => '500900401178310',
            'principio_ativo' => 'BRINZOLAMIDA',
            'avatar' => '500900401178310.jpg',
            'nome' => 'AZOPT',
            'laboratorio' => 'NOVARTIS',
            'apresentacao' => '10 MG/ML SUS OFT CT FR PLAS TRANS GOT X 5 ML',
            'valor_unitario' => 89.15,
            'estoque_inicial' => 400
        ]);

        Produto::create([
            'ggrem' => '527900609110414',
            'principio_ativo' => 'CAPTOPRIL',
            'avatar' => '527900609110414.jpg',
            'nome' => 'CAPTOSEN',
            'laboratorio' => 'PHARLAB',
            'apresentacao' => '10 MG/ML SUS OFT CT FR PLAS TRANS GOT X 5 ML',
            'valor_unitario' => 35.69,
            'estoque_inicial' => 250
        ]);



        Produto::create([
            'ggrem' => '510603401154314',
            'principio_ativo' => 'CEFTAZIDIMA',
            'avatar' => '510603401154314.jpg',
            'nome' => 'FORTAZ',
            'laboratorio' => 'GLAXOSMITHKLINE',
            'apresentacao' => '12,5 MG COM CT BL AL PLAS INC X 900 (EMB HOSP) ',
            'valor_unitario' => 1230.95,
            'estoque_inicial' => 450
        ]);


        Produto::create([
            'ggrem' => '526512010116317',
            'principio_ativo' => 'CLOXAZOLAM',
            'avatar' => '526512010116317.jpg',
            'nome' => 'OLCADIL',
            'laboratorio' => 'NOVARTIS',
            'apresentacao' => '1G PO INJ CT 01 FA VD INC + DIL 10 ML',
            'valor_unitario' => 39.90,
            'estoque_inicial' => 130
        ]);

        Produto::create([
            'ggrem' => '540713080001914',
            'principio_ativo' => 'DIATRIZOATO DE MEGLUMINA',
            'avatar' => '540713080001914.jpg',
            'nome' => 'RELIEV',
            'laboratorio' => 'BRACCO',
            'apresentacao' => '2 MG COM CT BL AL/AL X 30 ',
            'valor_unitario' => 67.85,
            'estoque_inicial' => 170
        ]);

        Produto::create([
            'ggrem' => '506714001156417',
            'principio_ativo' => 'DIAZOXIDE',
            'avatar' => '506714001156417.jpg',
            'nome' => 'PROGLYCEN',
            'laboratorio' => 'TEVA',
            'apresentacao' => '600 MG/ML SOL INJ CX 25 FA X 20 ML',
            'valor_unitario' => 45.90,
            'estoque_inicial' => 250
        ]);

        Produto::create([
            'ggrem' => '500205801112313',
            'principio_ativo' => 'ESTAZOLAM',
            'avatar' => '500205801112313.jpg',
            'nome' => 'NOCTAL',
            'laboratorio' => 'ABBOTT',
            'apresentacao' => '15 MG/ML SOL INJ CT AMP VD TRANS X 20 ML',
            'valor_unitario' => 145.25,
            'estoque_inicial' => 20
        ]);

        Produto::create([
            'ggrem' => '529203401115317',
            'principio_ativo' => 'FEMPROCUMONA',
            'avatar' => '529203401115317.jpg',
            'nome' => 'MARCOUMAR',
            'laboratorio' => 'ROCHE',
            'apresentacao' => '2 MG COM CT BL AL PLAS INC X 20',
            'valor_unitario' => 46.00,
            'estoque_inicial' => 320
        ]);

        Produto::create([
            'ggrem' => '502805201112311',
            'principio_ativo' => 'FENOBARBITAL',
            'avatar' => '502805201112311.jpg',
            'nome' => 'GARDENAL',
            'laboratorio' => 'SANOFI-AVENTIS',
            'apresentacao' => '100 MG COM CT BL AL PLAS INC X 20',
            'valor_unitario' => 88.40,
            'estoque_inicial' => 50
        ]);


        Produto::create([
            'ggrem' => '520727101117111',
            'principio_ativo' => 'FENOBARBITAL',
            'avatar' => '520727101117111.jpg',
            'nome' => 'FENOBARBITAL',
            'laboratorio' => 'TEUTO',
            'apresentacao' => '100 MG COM CT BL AL PLAS TRANS X 30',
            'valor_unitario' => 37.79,
            'estoque_inicial' => 20
        ]);


        Produto::create([
            'ggrem' => '520716060103803',
            'principio_ativo' => 'GLIMEPIRIDA',
            'avatar' => '520716060103803.jpg',
            'nome' => 'AMAGLYN',
            'laboratorio' => 'TEUTO',
            'apresentacao' => '1 MG COM CT BL AL PLAS INC X 30',
            'valor_unitario' => 29.20,
            'estoque_inicial' => 120
        ]);


        Produto::create([
            'ggrem' => '511000307154414',
            'principio_ativo' => 'IOBITRIDOL',
            'avatar' => '511000307154414.jpg',
            'nome' => 'HENETIX',
            'laboratorio' => 'GUERBET',
            'apresentacao' => '300 MG/ML SOL INJ CT FA VD INC X 50 ML',
            'valor_unitario' => 189.47,
            'estoque_inicial' => 100
        ]);

        Produto::create([
            'ggrem' => '538912120020114',
            'principio_ativo' => 'IOPROMIDA',
            'avatar' => '538912120020114.jpg',
            'nome' => 'ULTRAVIST',
            'laboratorio' => 'BAYER',
            'apresentacao' => '623,40 MG/ML SOL INJ CX 10 FA VD INC X 50 ML',
            'valor_unitario' => 325.45,
            'estoque_inicial' => 100
        ]);

        Produto::create([
            'ggrem' => '529204901111319',
            'principio_ativo' => 'ISOTRETINOÍNA',
            'avatar' => '529204901111319.jpg',
            'nome' => 'ROACUTAN',
            'laboratorio' => 'ROCHE',
            'apresentacao' => '10 MG CAP GEL MOLE CT BL AL X 30',
            'valor_unitario' => 12.90,
            'estoque_inicial' => 400
        ]);




    }

}
