<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Pedidos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('pedidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')
            ->onUpdate('cascade')
            ->onDelete('no action');
            $table->timestamps();
        });


        Schema::create('pedido_produto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('pedido_id');
            $table->unsignedBigInteger('produto_id');
            $table->unsignedInteger('quantidade')->default(1);
            $table->foreign('pedido_id')->references('id')->on('pedidos')->onUpdate('cascade')->onDelete('no action');
            $table->foreign('produto_id')->references('id')->on('produtos')->onUpdate('cascade')->onDelete('no action');
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
        //
        Schema::dropIfExists('pedido_produto');
        Schema::dropIfExists('pedidos');
    }
}
