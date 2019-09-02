# Sobre o desenvolvimento do projeto

## Tabela de medicamentos

Não ficou claro nas instruções do desafio para mim como deveria ser feita a conversão dos dados da tabela de medicamentos para o seeder, por isso optei por converter manualmente a tabela para `.csv` -- um formato de manipulação mais simples -- e então convertê-la para um array PHP e usar esse array para popular o seeder. Num cenário de produção hipotético em que a automação total fosse necessária, eu provavelmente usaria a biblioteca [Guzzle](https://github.com/guzzle/guzzle) para baixar a tabela em `.xlsx` de algum local e a [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) para lidar com ela.

## Arquivos não ignorados pelo controle de versão

Em uma aplicação real (ou com mais tempo, rs) eu não adicionaria arquivos como a lista de medicamentos ou as imagens para a pasta storage da aplicação. Desenvolveria uma maneira melhor que adicioná-las ao servidor e às máquinas locais. Mas para facilitar e agilizar o desenvolvimento e a replicação do projeto por vocês, julguei melhor commitá-las já nas pastas em que são consumidas.

## Bibliotecas utilizadas

Tentei fazer uso dos padrões do Laravel e do React o tanto quanto possível, e isso motivou o uso de algumas bibliotecas, como a `axios`, que é usada por padrão pelo Laravel -- caso contrário, provavelmente usaria a API Web nativa `fetch`, uma vez que ela já possui uma boa cobertura pelos navegadores mais modernos e essa aplicação só roda no browser. À parte esses casos, segue uma breve lista das motivações por trás das bibliotecas utilizadas:

- `eslint` e plugins: adicionar algumas regras para consistência e boas práticas no código do front-end.
- `react-router-dom`: uma boa e provavelmente a mais popular solução para declaração de rotas no React.