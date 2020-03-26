//getting the connection to the database:
const connection = require('../database/connection');
//Importing a package that will help us to generate a id for the just-registered ong:
const crypto = require('crypto');


module.exports = {

    //function used in a GET request to list all the ongs registered:
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
    
        return response.json(ongs);
    },

    //function used in a POST request to register a new ong:
    async create(request, response){

        //to get data separatedly:
        const { name, email, whatsapp, city, uf } = request.body;

        //now we're gonna generate a ID fot the ong that is registering itself:
        //"generate a 4 bytes of random characteres and convert'em into a hexadecimal string"
        const id = crypto.randomBytes(4).toString('HEX');

        //we'll register the ong now. we'll use the connection with the database to insert values in the ongs table in the specified order:
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
};