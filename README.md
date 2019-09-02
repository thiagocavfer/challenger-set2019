# CDTS

CDTS é uma aplicação Laravel + React.

## Instalação

Clone o repositório e instale as dependências através do seguinte comando:

```[sh]
composer install && npm install
```

## Configuração

Duplique o arquivo `.env.example` na raiz do projeto e renomei-o para `.env` executando o seguinte comando:

```[sh]
cp .env.example .env
```

Então, edite o arquivo renomeado alterando as seguintes linhas, modificando os parâmetros destacados entre colchetes para refletirem as configurações da sua máquina:

```[env]
DB_DATABASE=[NOME_DO_SEU_BANCO_DE_DADOS]
DB_USERNAME=[NOME_DO_USUÁRIO_DO_BANCO_DE_DADOS]
DB_PASSWORD=[SENHA_DO_USUÁRIO_DO_BANCO_DE_DADOS]
```

### Gere uma chave para encriptação

Gere uma chave para encriptação executando o seguinte comando:

```[sh]
php artisan key:generate
```

### Rode as migrations

Gere as tabelas e colunas do banco de dados através do seguinte comando:

```[sh]
php artisan migrate
```

### Popule as tabelas do banco

Rode os seeders para popular as tabelas do banco através do comando:

```[sh]
php artisan db:seed
```

### Gere os arquivos necessários

Rode o seguinte comando para gerar os arquivos públicos a partir do storage e compilar os assets CSS e JavaScript:

```[sh]
php artisan storage:link && npm run prod
```

## Executando o projeto

Execute o seguinte comando para rodar o servidor local:

```[sh]
php artisan serve
```

Finalmente, visite [localhost:8000](http://localhost:8000/) através do seu navegador para acessar o app.
