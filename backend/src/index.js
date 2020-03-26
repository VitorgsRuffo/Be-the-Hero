const express = require('express');
//import the cors module:
const cors = require('cors');
//importando as rotas do arquivo routes.js:
const routes = require('./routes');


const app = express();

//for now allows all frontend apps to access this backend. (but we can specie the one allowed later)
app.use(cors());

//Converte o corpo dos request (que estara em json) em um obj JS de modo que consigamos usar dps.
app.use(express.json());

app.use(routes);

app.listen(3333);






//rota: é o caminho completo; recurso: oque queremos, o destino da rota.

/*Metodos HTTP:
* GET: buscar uma informaçao no backend. (retorno de informacoes)
*   ex: app.get: para acessarmos uma rota/recurso usamos o metodo get do app
*
* POST: criar uma informaçao no backend. (enviar informacoes)
*
* PUT: alterar uma info no backend.
*
* DELETE: deletar um info no backend.
*/

/*Tipos de parametros:
*
*   Query parameters: parametros nomeados enviados na roda apos '?' (servem para filtros, paginação)
    ex: http://localhost:3333/users?name=diego&age=28&page=3

    Route parameters: parametros utilizados para identificar recursos.

*   Request Body: utilizado para criar ou alterar recursos.
*/


/*Banco de dados:

    SQL: MySQL, SQLite, PostgreSQL, Oracle..

    NoSQL: MongoDB, CouchDB, ..

*/

/*Comunicação com o banco de dados:

    Driver:(intalar - pacode do bd para node) (usar - SELECT * FROM users WHERE..)

    Query Builder: (usamos codigo JS para criar as query statements) table('users').select('*')....

*/

