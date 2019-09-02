<div style="font-family: sans;">
  <h1>Reserva #{{ $codigo }}</h1>
  <hr/>

  @foreach ($medicines as $medicine)
    <p><strong>Nome:</strong> {{ $medicine['nome'] }}</p>
    <p><strong>Laboratório:</strong> {{ $medicine['laboratorio'] }}</p>
    <p><strong>Valor unitário:</strong> {{ $medicine['valor_unitario'] }}</p>
    <p><strong>Quantidade:</strong> {{ $medicine['quantidade'] }}</p>
    <hr/>
  @endforeach
</div>

