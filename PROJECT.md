# Desafio Dev Set/2019

**Instalação:

A aplicação foi criada usando docker, assim, não há necessidade de instalar qualquer componente local.

Comandos para instalação:

```
cp ./server/.env.example server/.env
chmod -R 777 ./server/storage
chmod -R 777 ./server/bootstrap/cache
docker-compose up -d
dpcker exec -it php bash -c "composer install"
docker exec -it php bash -c "php artisan key:generate"
docker exec -it php bash -c "php artisan migrate"
docker exec -it php bash -c "php artisan db:seed"

```

3 - Endpoints da aplicação server:

GET `http://localhost/api/medicamentos` para listar todos os medicamentos
GET `http://localhost/api/medicamentos/{id}` para listar um medicamento
GET `http://localhost/api/medicamentos/search/{term}` para pesquisar medicamentos
POST `http://localhost/api/pedidos` para salvar um pedido
GET `http://localhost/pedidos/{id}` para gerar o PDF de um pedido


4 - Para testar a aplicação client, acessar:

`http://localhost:3000`

