<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Models\Produtos\IProduto;
use App\Models\Produtos\ProdutoRepository;
use App\Models\Pedidos\IPedido;
use App\Models\Pedidos\PedidoRepository;
use App\Models\Pedidos\ICarrinho;
use App\Models\Pedidos\CarrinhoRepository;




class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(IProduto::class, ProdutoRepository::class);
        $this->app->bind(IPedido::class, PedidoRepository::class);
        $this->app->bind(ICarrinho::class, CarrinhoRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
