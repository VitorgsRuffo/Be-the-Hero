const connection = require('../database/connection');

//mvc methodology - until 5 methods: list all rows, list only one row, create row, alter row, delete row.

module.exports = {

    //list all rows:
    async index(request, response){

        //pagination logic: on!
        const { page = 1 } = request.query; //request.query holds the key/value pairs that may be sent in the url.

        const incidents = await connection('incidents')
        //we'll use the ong_id that we have in the incidents table (used to indicate which of the
        //ongs created the incident) to return, along with the incident info, the ong info.
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        //"from ongs table we want to make available to select that row where the id is equal to the incident ong_id"
        .limit(5)
        .offset((page - 1) * 5)
        //select all incidents columns, and only the specified
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);

        

        //return the total number of incidents in the database:
        const count = await connection('incidents').count();

        console.log(count); // [ { 'count(*)': 17 } ]


        //count[0] ==  { 'count(*)': 17 } 
        //count[0]['count(*)'] == 17
        response.header('X-Total-Count', count[0]['count(*)']);

        return response.json(incidents);
    },

    //create row: function used to register a new incident.
    async create(request, response){

        //getting the data inside the POST request body:
        const { title, description, value } = request.body;

        //we're missing the ong_id information here to put in the incident register. That infomation
        //is not available in the body of the request. It is available in the headers of the request.
        //The headers contain data about the context of the request: user authentication(e.g, email, password, ond_id), user location.

        //acessing the ong_id:
        const ong_id = request.headers.authorization;

        //It will be returned an array with the info that was inserted:
        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        const id = result[0]; //the first item will be the unique id that identifies the case;

        //then we can return the id to the frontend:
        return response.json({ id });

    },

    //delete row:
    async delete(request, response){

        //getting the id of the incident to be deleted (sent in the url).
        const { id } = request.params;

        //getting the id of the logged ong: because we only will let the ong that created the case delete it.
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        //if the id of the logged ong is different from the ong_id(id of the ong that created the incident) we'll return an error.
        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permited.'}); //this status (401) means that the action is not authorized.
        }else{

            await connection('incidents').where('id', id).delete();
            
            //this status(204) means that things were right but there is no response.
            return response.status(204).send();
        }
    }
}