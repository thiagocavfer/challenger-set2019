<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Carrinho extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carrinhos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('no action')->onDelete('no action');
            $table->timestamps();
        });

        Schema::create('carrinho_produto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('carrinho_id');
            $table->unsignedBigInteger('produto_id');
            $table->unsignedInteger('quantidade')->default(1);
            $table->foreign('carrinho_id')->references('id')->on('carrinhos')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('produto_id')->references('id')->on('produtos')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('carrinho_produto');
        Schema::dropIfExists('carrinhos');

    }
}
