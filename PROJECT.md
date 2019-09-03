# Sobre o desenvolvimento do projeto

## Tabela de medicamentos

Não ficou claro nas instruções do desafio para mim como deveria ser feita a conversão dos dados da tabela de medicamentos para o seeder, por isso optei por converter manualmente a tabela para `.csv` -- um formato de manipulação mais simples -- e então convertê-la para um array PHP e usar esse array para popular o seeder. Num cenário de produção hipotético em que a automação total fosse necessária, eu provavelmente usaria a biblioteca [Guzzle](https://github.com/guzzle/guzzle) para baixar a tabela em `.xlsx` de algum local e a [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) para lidar com ela.

## Arquivos não ignorados pelo controle de versão

Em uma aplicação real (ou com mais tempo, rs) eu não adicionaria arquivos como a lista de medicamentos ou as imagens para a pasta storage da aplicação. Desenvolveria uma maneira melhor que adicioná-las ao servidor e às máquinas locais. Mas para facilitar e agilizar o desenvolvimento e a replicação do projeto por vocês, julguei melhor commitá-las já nas pastas em que são consumidas.

## Bibliotecas utilizadas

Tentei fazer uso dos padrões do Laravel e do React o tanto quanto possível, e isso motivou o uso de algumas bibliotecas, como a `axios`, que é usada por padrão pelo Laravel -- caso contrário, provavelmente usaria a API Web nativa `fetch`, uma vez que ela já possui uma boa cobertura pelos navegadores mais modernos e essa aplicação só roda no browser. À parte esses casos, segue uma breve lista das motivações por trás das bibliotecas utilizadas:

- `eslint` e plugins: adicionar algumas regras para consistência e boas práticas no código do front-end.
- `react-router-dom`: uma boa e provavelmente a mais popular solução para declaração de rotas no React.
- `barryvdh/laravel-dompdf`: um wrapper da biblioteca `dompdf` para o Laravel. Uma boa biblioteca para converter HTML em PDF.

## Coisas que faria se tivesse mais tempo

- Terminar o desafio, claro. Finalizar a funcionalidade de reservas, adicionar a remoção de medicamentos, mostrar todas as informações no PDF; fazer alguns ajustes -- a parte de reservas está um pouco frágil porque está dependente de mais do cliente, realizando algumas funções que talvez devessem ser delegadas ao servidor; e dar uma revisada.
- Testes! Infelizmente, não consegui fazer nenhum.
- Melhorar os estilos. O layout e design estão bem básicos, especialmente no PDF.
- React Context: Acho que seria interessante desenvolver um mínimo sistema de notificações utilizando React Context e os Toasts do Bootstrap.
- PhpSpreadSheet: A solução utilizando `.csv` é eficaz, mas talvez fuja um pouco do que vocês queriam. Com mais tempo, implementaria a biblioteca PhpSpreadSheet para gerar os seeders direto do `.xlsx`.
- PHP_CodeSniffer no projeto: O ESLint está rodando como uma dependência do projeto, mas o PHP_CodeSniffer roda globalmente. Para manter uma consistência, e também para devida utilização da biblioteca, eu faria com que o PHP_CodeSniffer também rodasse como uma dependência.
