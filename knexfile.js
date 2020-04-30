module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node_knex',
      user:     'docker',
      password: 'docker',
      host: '192.168.99.100'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  onUpdateTrigger: (table)=> `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `,

};
