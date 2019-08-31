# Sobre o Projeto

## Tabela de medicamentos

Não ficou claro nas instruções do desafio para mim como deveria ser feita a conversão dos dados da tabela de medicamentos para o seeder, por isso optei por converter manualmente a tabela para `.csv` -- um formato de manipulação mais simples -- e então convertê-la para um array PHP e usar esse array para popular o seeder. Num cenário de produção hipotético em que a automação total fosse necessária, eu provavelmente usaria a biblioteca [Guzzle](https://github.com/guzzle/guzzle) para baixar a tabela em `.xlsx` de algum local e a [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) para lidar com ela.
