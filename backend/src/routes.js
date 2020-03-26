//importing express package:

const express = require('express');

//Importing the ong functions:
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');



//Creating a routes var:
const routes = express.Router();

//Dealing with the requests that the frontend will send.

    //here we are dealing with a get request sent to the page /session. The handler function will check if there is such a ong with the id sent.
    routes.post('/sessions', sessionController.create);


    //here we are dealing with a get request sent to the page /ongs. The function will connect to the database and return all the rows in the ongs table.
    routes.get('/ongs', ongController.index);

    //here we are dealing with a post request sent to the page /ongs. The request will send the data of the ong that is being registered.
    routes.post('/ongs', ongController.create);

    //here we deal with a get request sent to the page /incidents. The function will connect to the database and return all the rows in the incidents table.
    routes.get('/incidents', incidentController.index);

    //here we deal with a post request sent to the page /incidents. The request will send the data of the incident that is being registered by the logged ong.
    routes.post('/incidents', incidentController.create);

    //here we deal with a get request sent to the page /profile. The function will connect to the database and return all the rows in the incidents table that was created by the logged ong.
    routes.get('/profile', profileController.index);


    //This will handle a delete request sent to the page /incidents/id  (id == identificantion of the incident to be deleted).
    routes.delete('/incidents/:id', incidentController.delete);



//exportando a variables routes de dentro deste arquivo.
module.exports = routes;




















/*
routes.post('/users', (request, response) => {
    //accessing all the parameters sent through the query parameters.
    //const params = request.query; // /users?name=diego&age=28&page=3

    //console.log(params);   /users/1

    //accessing the route parametes:
    //const params2 = request.params;

    //console.log(params2);

    //accessing the request body:
    const body = request.body;

    console.log(body);


    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Vitor Ruffo'
    });
});
*/


