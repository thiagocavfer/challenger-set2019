
Para executar o projeto é necessario copiar o arquivo  env.example 
alterar para o nome para .env.

$ cp env.example .env  
 
 alterar as credenciais para acessar o banco de dados

$ nano .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME= usuario
DB_PASSWORD= senha
```

o projeto faz uso de libraries que necessitam da extensão php-gd instalada na máquina,

 fiz uso da librarie mpdf para gerar o arquivo pdf, por ser flexivel, pratica eficiente para atender as necessidades

 para o front-end utilizei o axios para as requisições as end points, por já vir por padrão no laravel
e ser eficiente para atender as necessidades do projeto
e utilizei o component 'react-bootstrap-typeahead' para melhorar a experiencia de uso no campo de busca.



para instalar no linux:

$ sudo apt install php-gd


após isso basta instalar as dependencias via composer na pasta do projeto:

$ composer install
 
e as dependencias do front-end React 
$ sudo npm install

gerar a key:

$ php artisan key:generate

realizar as migrações e o seeder

$ php artisan migrate --seed

para servir a aplicação execute:
php artisan serve

as funcionalidades do projeto são demonstradas após o usuario se cadastrar e fazer o login
