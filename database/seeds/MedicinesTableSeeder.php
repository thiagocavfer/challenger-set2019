<?php
// Como estamos lidando com floats nessa classe,
// melhor fazer uso do strict_types
declare(strict_types=1);

use Illuminate\Database\Seeder;

class MedicinesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $medicines = $this->getMedicines();
        $table = DB::table('medicines');

        foreach ($medicines as $medicine) {
            $table->insert([
                'ggrem' => $medicine['GGREM'],
                'principio_ativo' => $medicine['PRINCÍPIO ATIVO'],
                'nome' => $medicine['NOME DO MEDICAMENTO'],
                'laboratorio' => $medicine['NOME DO LABORATÓRIO'],
                'apresentacao' => $medicine['APRESENTAÇÃO'],
                'valor_unitario' => $this->transformUnitValue(
                    $medicine['VALOR UNITÁRIO']
                ),
                'estoque_inicial' => $medicine['ESTOQUE INICIAL']
            ]);
        }
    }

    /**
     * Pega arquivo CSV do storage e o transforma em array.
     *
     * @return void
     */
    private function getMedicines() : array
    {
        $file = storage_path('app/lista_medicamentos.csv');
        $rows = array_map('str_getcsv', file($file));
        $header = array_shift($rows);
        $medicines = [];
        foreach ($rows as $row) {
            $medicines[] = array_combine($header, $row);
        }

        return $medicines;
    }

    /**
     * Transforma o valor unitário de string para float.
     *
     * @param string $unitValue
     * @return float
     */
    private function transformUnitValue(string $unitValue) : float
    {
        return floatval(
            str_replace(
                ['R$', '.', ','],
                ['', '', '.'],
                $unitValue
            )
        );
    }
}
