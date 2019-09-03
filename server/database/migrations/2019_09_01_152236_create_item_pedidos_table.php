<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemPedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_pedidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('quantidade');
            $table->bigInteger('medicamento_id')->unsigned();
            $table->foreign('medicamento_id')
                  ->references('id')->on('medicamentos')
                  ->onDelete('cascade');
            $table->bigInteger('pedido_id')->unsigned();
            $table->foreign('pedido_id')
                  ->references('id')->on('pedidos')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_pedidos');
    }
}
