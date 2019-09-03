# Desafio Dev Set/2019

**Instalação:

A aplicação foi criada usando docker, assim, não há necessidade de instalar qualquer componente local.

Comandos para instalação:

```
cp ./server/.env.example server/.env
chmod -R 777 ./server/storage
chmod -R 777 ./server/bootstrap/cache
docker-compose up -d
docker exec -it mariadb bash -c "mysql -u root < /sql/script.sql"
dpcker exec -it php composer install
docker exec -it php php artisan key:generate
docker exec -it php php artisan migrate
docker exec -it php php artisan db:seed

```

3 - Para testar a aplicação server (API), apontar para:

`http://localhost/medicamentos` para listar todos os medicamentos

`http://localhost/medicamentos/{id}` para listar um medicamento

`http://localhost/medicamentos/search/{term}` para pesquisar medicamentos


4 - Para testar a aplicação client, acessar:

`http://localhost:3000`	  

