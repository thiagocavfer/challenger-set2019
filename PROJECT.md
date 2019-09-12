Tarefas que precisam ser executadas antes de rodar o projeto.

-- Instalar o Xampp ou Lampp
Versão do php igual ou superior 7.1

- Instalação do NodeJS e npm

- Criar a base de dados medicamento

- Executar a migration e a seeder, zerando toda a base e reconstruíndo tudo novamente
php artisan migrate:refresh --seed

- Start no servidor apache e mariadb

- Start da api através do comando php artisan serve

- Start do front: yarn start
