# Commerce MongoDB 
O projeto tem como objetivo aplicar os conhecimentos adquiridos sobre o MongoDB, utilizando operadores simples e complexos para alterar documentos, além de construir queries e expressões complexas com índices textuais e expressões regulares.

O projeto consiste em trabalhar com um conjunto de dados do cardápio do McDonald's, incluindo ingredientes, valores nutricionais e dados fictícios de vendas. O objetivo é aplicar os conceitos aprendidos no módulo de MongoDB para realizar operações de alteração nos documentos do banco de dados.

## Funcionalidades
O projeto é dividido em três níveis, cada um com suas respectivas funcionalidades:

Nível 1
Alterar documentos utilizando métodos de update com operadores simples.
Nível 2
Alterar documentos utilizando operadores complexos e modificadores.
Nível 3
Construir queries e expressões complexas utilizando índices textuais e expressões regulares.
Tecnologias utilizadas
As principais tecnologias utilizadas neste projeto são:

* MongoDB
* DataScience
* Queries
* Node.js
* JavaScript

# Instalação do projeto localmente
Para executar o projeto localmente, siga as instruções abaixo:

Faça o clone do repositório do projeto
```javascript
git clone git@github.com:brenolg/Commerce-MongoDB.git
```
Instale as dependências do projeto
```javascript
npm install
```
Certifique-se de ter o MongoDB instalado em sua máquina. Caso não tenha, siga as instruções de instalação na documentação oficial do MongoDB.

Inicie o servidor MongoDB localmente
```javascript
docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```
Execute o projeto
```javascript
docker exec -it nomeDoContainer bash
```
Dentro do container, no diretório /app, execute o seguinte comando para restaurar a base de dados commerce
```javascript
DBNAME=commerce ./scripts/resetdb.sh assets/produtos
```
- A execução desse script criará um banco de dados chamado commerce e importará os dados para a coleção produtos.
- Execute as queries como desejar.

# Requisitos
1. Retorne a quantidade de documentos inseridos na coleção produtos
2. Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos
3. Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
4. Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
5. Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36 ou tenham a quantidade de vendas igual a 85
6. Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
7. Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
8. Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco
9. Retorne o nome de todos os lanches que possuam calorias abaixo de 500
10. Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
11. Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
12. Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
13. Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo
14. Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
15. Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo
16. Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
17. Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos
18. Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
19. Remova o item cebola de todos os sanduíches
20. Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo
21. Remova o último ingrediente do sanduíche Cheddar McMelt
22. Adicione a quantidade de vendas dos sanduíches por dia da semana
23. Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)
24. Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente
25. Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
26. Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
27. Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
28. Conte quantos produtos têm 4 ingredientes
29. Renomeie o campo descricao para descricaoSite em todos os documentos
30. Remova o campo curtidas do item Big Mac
31. Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos
32. Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5

# Agradecimentos
Agradecemos a todos os colaboradores e contribuidores por seu apoio e participação no desenvolvimento deste repositório. A aplicação dos conhecimentos sobre o MongoDB de forma prática é fundamental para o aprendizado e aprimoramento das habilidades de desenvolvimento.
