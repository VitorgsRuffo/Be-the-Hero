const connection = require('../database/connection');


module.exports = {
    //this function will check if that ong is registered on the website. Check if the ong_id is in the database.
    async create(request, response){

        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID.'});
        }

        return response.json(ong);
    }

}