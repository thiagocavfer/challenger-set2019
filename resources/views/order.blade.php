@inject('helper', 'App\Helpers\ReservationsHelper')

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Pedido de reserva #{{ $code }}</title>
        <style>
            table, td, th {
              width: 100%;
              border: 1px solid #000;
              border-collapse: collapse;
            }

            td, th {
              padding: 8px 16px;
            }
        </style>
    </head>
    <body>
        <h1>Pedido de reserva #{{ $code }}</h1>
        <table>
          <thead>
            <tr>
              <th>Medicamento(s)</th>
              <th>Laboratório</th>
              <th>Valor unitário</th>
              <th>Valor total</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($medicines as $medicine)
              <tr>
                <td>{{ $medicine['quantidade'] }}x {{ $medicine['nome'] }}</td>
                <td>{{ $medicine['laboratorio'] }}</td>
                <td>R$ {{ $medicine['valor_unitario'] }}</td>
                <td>R$ {{ number_format(
                  ReservationsHelper::quantityTimesUnitValue(
                    $medicine['valor_unitario'],
                    $medicine['quantidade']
                  ),
                  2
                ) }}</td>
              </tr>
            @endforeach
          </tbody>
        </table>
        <p>
          <strong>Quantidade total:&nbsp;</strong>
          {{ ReservationsHelper::getTotalQuantity($medicines) }}
        </p>
        <p>
          <strong>Total geral do pedido:&nbsp;</strong>
          {{ ReservationsHelper::getFullValue($medicines) }}
        </p>
    </body>
</html>
