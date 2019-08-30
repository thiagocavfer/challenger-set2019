<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Product extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('produtos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ggrem');
            $table->string('principio_ativo');
            $table->string('avatar');
            $table->string('nome');
            $table->string('laboratorio');
            $table->string('apresentacao');
            $table->decimal('valor_unitario', 9, 2);
            $table->integer('estoque_inicial');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produtos');
    }
}



/*


            ggrem: 517609501131410,
            principio_ativo: "ACEBROFILINA",
            avatar: "517609501131410.jpeg"
            nome: "RESPIRAN",
            laboratorio: "GLOBO"
            apresentacao: "10 MG/ML XPE CT FR PLAS AMB X 120 ML + CP MED",
            valor_unitario: 23.5,
            estoque_inicial: 250



*/
