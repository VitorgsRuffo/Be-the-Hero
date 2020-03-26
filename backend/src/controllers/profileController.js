const connection = require('../database/connection');


module.exports = {

    //listing only the incidents that the logged ong has created:
    async index(request, response){

        //getting the ong id (to know which ong is logged)
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);

    }

}