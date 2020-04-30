const db = require('../database');

module.exports = {

    async index(req,res) {

        const results = await db('users').where('deleted_at',null);

        return res.json(results);

    },

    async store(req,res) {

        try {
        
            const { username } = req.body;

            const results = await db('users').insert({ username });

            return res.status(201).send();
        
        } catch(err) {

            console.log(err);
            return res.status(500).send();

        }

    },

    async update(req,res) {

        try {
            
            const { id } = req.params;

            const { username } = req.body;

            await db('users').update({ username }).where({ id });

            return res.send();
        
        } catch(err) {

            console.log(err);
            return res.status(500).send();

        }

    },

    async delete(req,res) {

        try {
            
            const { id } = req.params;

            await db('users').where({ id }).update('deleted_at', new Date());

            return res.status(204).send();
        
        } catch(err) {

            console.log(err);
            return res.status(500).send();

        }

    }

};