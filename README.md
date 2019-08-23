# Reserva de Medicamentos

**Atenção, Dev!**

Antes de "meter a mão na massa", leia com atenção todas as instruções abaixo.
Não detalhes e aproveite para mostrar ao mundo todo o seu potencial e eficácia.


## Primeira Etapa - API (backend)
Você deve construir uma API REST com PHP LARAVEL que retorne os dados referentes a 18 medicamentos.

Os dados de cada medicamento são:

- GGREM do Medicamento
- Nome do princípio ativo
- Avatar do medicamento
- Nome do medicamento
- Nome do laboratório
- Apresentação
- Valor (R$) do medicamento
- Estoque inicial (unidades)

Primeiramente os dados dos 18 medicamentos devem ser cadastrado em uma tabela de banco de dados MariaDB através de uma SEEDER do LARAVEL, com base em um documento chamado **"lista_medicamentos.xlsx"** que está disponível no diretório **"challenge"**.

Logo após, a API deve ser construída para a responder a buscas feitas pelo nome do princípio ativo, nome do medicamento e nome do laboratório.

O retorno da consulta a API deve ser realizado em formato JSON e seguindo a estrutura abaixo:

```
{
    data: [
        {
            ggrem: 517609501131410,
            principio_ativo: "ACEBROFILINA",
            avatar: "517609501131410.jpeg"
            nome: "RESPIRAN", 
            laboratorio: "GLOBO"
            apresentacao: "10 MG/ML XPE CT FR PLAS AMB X 120 ML + CP MED",
            valor_unitario: 23.5,
            estoque_inicial: 250
        }, ...
    ]
}
```
As imagens de cada medicamento, estão no diretório **challenge/images**.

Além de retornar dados dos medicamentos contidos no banco de dados, a API também deverá permitir a persistência dos dados do pedido *(lista de medicamentos, com suas respectivas quantidades, reservados pelo usuário - ver fim da **Segunda Etapa**)*.

___
## Segunda Etapa - SPA (frontend)

Para consumir os dados da API, você deverá criar uma SPA em ReactJS e Bootstrap 4.
Esta SPA deverá conter duas rotas: Uma de busca e reserva dos medicamentos e outra com a lista de medicamentos reservados pelo usuário (carrinho).  

**A primeira rota** deverá conter os seguintes componentes e funcionalidades:

- O usuário poderá realizar a busca através do nome do medicamento, princípio ativo e nome do laboratório.

- Quando a busca for realizada, a SPA deve mostrar todos os medicamentos que tenham correspondido ao filtro estabelecido pelo usuário.

- O usuário poderá escolher a ordenação do resultado por ordem alfabética do nome do medicamento ou valor unitário (crescente ou decrescente).

- O resultado deve ser disposto, nesta rota da SPA, como uma tabulação de cards, logo abaixo do campo de busca, mantendo até 4 (quatro) cards por linha.

- Cada card deve conter o nome do medicamento, laboratório, avatar, apresentação e seu valor unitário (R$).

- No rodapé de cada card (ainda em seu interior), deverá existir uma combobox onde o usuário poderá selecionar quantas unidades daquele medicamento deseja reservar e um botão para confirmar a reserva.

**Já a segunda rota**, deverá conter uma Lista com "N" linhas onde cada linha corresponde a um medicamento reservado na rota anterior. Cada linha deve conter as seguintes colunas/informações:

- Nome do medicamento;
- Laboratório;
- Valor unitário (R$);
- Quantidade reservada;
- Valor total (valor unitário * quantidade reservada) (R$).

Em cada linha da lista, como última coluna, também deve haver um botão pelo qual o usuário consiga desfazer a reserva daquele medicamento.

A última linha da lista deverá exibir as seguintes colunas / informações:
- Somatório das quantidades de medicamentos reservados ;
- Total geral do pedido em reais (R$).

Logo abaixo da lista, deverá haver um botão chamado **"Concluir Pedido"** que deve realizar as seguintes ações:

- Persistir os dados do pedido no banco de dados através da API;
- Imprimir os dados do pedido em formato **PDF**. 
___


## **O que vamos avaliar:**

- Desempenho;
- Manutenabilidade;
- Organização;
- Boas práticas.

___

## **Para finalizar...**
Se liga nessas informações importantes para o início e conclusão do desafio:

- Crie um **fork** e desenvolva a sua solução nele.
- Você terá **4 dias a partir da data do envio do desafio** para concluí-lo.
- Crie um **PROJECT.md** com a explicação de como devemos executar o projeto e o máximo de detalhes possível sobre o que foi feito e como foi feito (bibliotecas utilizadas, o porque de utilizá-las, etc).
- Após concluir todas as tarefas, faça um **pull request**.
- Envie um e-mail para "**devteam@cdts.fiocruz.br**" com o link do seu **pull request** e com o assunto "**challenge accepted**".

Caso tenha alguma dívida, entre em contato conosco também através do e-mail "**devteam@cdts.fiocruz.br**".

___
### **Bom... Por enquanto é só isso tudo.**

Um excelente desafio e que a força esteja com você o/
#### **Let`s Go!**