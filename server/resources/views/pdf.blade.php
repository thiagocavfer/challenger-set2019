<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <title>
            Reserva de Produtos
        </title>
    </head>
    <body>
        <h2>
            Reserva de Pedidos
        </h2>
        <table class="table table-sm table-bordered">
            <tr>
                <th scope="col">Número do Pedido</th>
                <td class="text-right">{{ $pedido->id }}</td>
            </tr>
            <tr>
                <th scope="col">Número de Itens</th>
                <td class="text-right">{{ $pedido->total_itens }} </td>
            </tr>
            <tr>
                <th scope="col">Valor Total</th>
                <td class="text-right">{{ formatMoeda($pedido->valor_total) }}</td>
            </tr>
        </table>
        <h3>Itens do Pedido</h3>
        <table class="table table-sm table-bordered">
            <tr>
                <th scope="row">Nome</th>
                <th scope="row">Laboratório</th>
                <th scope="row" class="text-right">Valor Unitário</th>
                <th scope="row" class="text-right"abbr="">Quantidade</th>
                <th scope="row" class="text-right">Subtotal</th>
            </tr>
            @foreach($pedido->itens as $item)
            <tr>
                <td>{{ $item->medicamento->nome }}</td>
                <td>{{ $item->medicamento->laboratorio }}</td>
                <td class="text-right">{{ formatMoeda($item->medicamento->valor_unitario) }}</td>
                <td class="text-right">{{ $item->quantidade }}</td>
                <td class="text-right">{{ formatMoeda($item->quantidade * $item->medicamento->valor_unitario) }}</td>
            </tr>
            @endforeach
        </table>
    </body>
</html>