<?php

namespace App\Models\Pedidos;

use App\User;
use \Mpdf\Mpdf;



class FileHandler
{
    //

    protected $mpdf;
    protected $repository;

    public function __construct(IPedido $repository)
    {
        $this->mpdf = new Mpdf();
        $this->repository = $repository;
    }





    public function generatePDF($pedido_id)
    {

        $data = $this->repository->orderDetails((Pedido::find($pedido_id)));
        $pedido= $data['pedido'];
        $produtos = $data['produtos'];

        $user=User::find($pedido->user_id);

        $this->include_style();

        $this->WriteHTML("<h3>PEDIDO nº {$pedido->id}</h3>");
        $this->WriteHTML("<br /><br />");
           $this->WriteHTML("<div>");
             $this->WriteHTML("<p>Cliente: {$user->name}</p>");
             $this->WriteHTML("<p>Email: {$user->email}</p>");
           $this->WriteHTML("</div>");
         $this->WriteHTML("<br /><br />");

        $this->WriteHTML($this->open_table(['Nome', 'Apresentação', 'Quantidade', 'Valor Unitário', 'Valor', '']));
        $valorTotal= 0;
        foreach ($produtos as $p) {
            $this->WriteHTML("<tr>");
            $this->WriteHTML("<td>{$p->nome}</td>");
            $this->WriteHTML("<td>{$p->apresentacao}</td>");
            $this->WriteHTML("<td>{$p->pivot->quantidade}</td>");
            $this->WriteHTML("<td>".$this->NumberFormatR($p->valor_unitario)."</td>");
            $valor= $p->valor_unitario * $p->pivot->quantidade;
            $valorTotal += $valor;
            $this->WriteHTML("<td> ".$this->NumberFormatR($p->valor_unitario)." x {$p->pivot->quantidade} = ".$this->NumberFormatR($valor)."</td>");
            $this->WriteHTML("<td>");
            $this->include_photo('foto', "images/{$p->avatar}", 80, 70);
            $this->WriteHTML("</td>");
            $this->WriteHTML("</tr>");
        }
        $this->WriteHTML("<tfooter>");
        $this->WriteHTML("<tr><td colspan='6'> Total: ".$this->NumberFormatR($valorTotal)."</td></tr>");
        $this->WriteHTML("</tfooter>");

        $this->WriteHTML($this->close_table());

        $this->Output();

    }


    private function include_photo($name, $path, $width, $height)
    {
        if (null != $path or '' != $path) {
            $this->mpdf->imageVars[$name] = file_get_contents($path);
            $this->WriteHTML("<img src='var:{$name}' width={$width} height={$height} />");
        }
    }


    private function include_style()
    {
        $style = file_get_contents("pdf/css/bootstrap.min.css");
        $this->mpdf->WriteHTML($style, 1);
    }




    private function open_table(array $headers): string
    {
        $openDiv = '<div class="row">
                        <div class="col-lg-6">';
        $table = '<table class="table table-advance table-bordered">
                   <thead>
                       <tr>';
        foreach ($headers as $v) {
            $table .= "<th>" . $v . "</th>";
        }
        $table .= '</tr>
                   </thead>
                 <tbody>';
        return $openDiv . $table;
    }






    private function close_table(): string
    {
        $tfooter = '</tbody>
                   </table>';
        $closeDiv = '</div></div>';
        return $tfooter . $closeDiv;
    }



    public function NumberFormatR($value){
        return ' R$ '. number_format($value, 2, ',', '.');
    }


    public function WriteHTML($content)
    {
        $this->mpdf->WriteHTML($content);
    }





    public function Output()
    {
        $this->mpdf->Output();
    }













}
