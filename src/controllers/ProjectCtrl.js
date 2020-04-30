const db = require('../database');

module.exports = {

    async index(req,res) {
        
        try {

            const {user_id, page =1} = req.query;

            const query = db('projects').limit(5).offset((page-1)*5);

            const countQuery = db('projects').count();


            if(user_id) {
                
                query.where({ user_id }).join('users','users.id','=','projects.user_id').select('projects.*','users.username').where('users.deleted_at',null);

                countQuery.where({user_id});

            }

            const results = await query;

            const [total] = await countQuery;

            res.header('X-Total-Count', total.count);

            return res.json(results);

        } catch(err) {

            return res.status(500).send();

        }

    },

    async store(req,res) {
        
        try {

            const {title,user_id} = req.body;

            await db('projects').insert({title,user_id});

            return res.status(201).send();

        } catch(err) {

            return res.status(500).send();

        }

    }

};