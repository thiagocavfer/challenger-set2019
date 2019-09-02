# Desafio Dev Set/2019

**Instalação:

A aplicação foi criada usando docker, assim, não há necessidade de instalar qualquer componente local.

1 - Executar docker-compose up -d
2 - Setup da aplicação server

2.1 - Aplicar permissões de leitura e gravação nas pastas `storage` e `bootstrap/cache`
	
2.2 - Copiar o `server/.env.example` para `server/.env`
	
2.2 - Rodar os comandos:

`docker exec -it php php artisan key:generate`

`docker exec -it php php artisan migrate`

`docker exec -it php php artisan db:seed`


3 - Para testar a aplicação server (API), apontar para:

`http://localhost/medicamentos` para listar todos os medicamentos

`http://localhost/medicamentos/{id}` para listar um medicamento

`http://localhost/medicamentos/search/{term}` para pesquisar medicamentos


4 - Para testar a aplicação client, acessar:

`http://localhost:3000`	  
