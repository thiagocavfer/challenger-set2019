<?php

namespace App\Models\Produtos;


 interface IProduto{

   public function listAll($orderBy = 'nome', $order = 'asc');
   public function search($param, $orderBy='', $order='asc');

}
