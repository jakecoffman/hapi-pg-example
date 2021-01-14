const knex = require('knex')

let instance

module.exports.connect = () => {
  if (instance) {
    return instance
  }

  instance = knex({
    client: 'pg',
    debug: true,
    asyncStackTraces: true,
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'postgres'
    },
    // disable wrapping tables and columns with double quotes
    wrapIdentifier: (value, origImpl, queryContext) => value
  })

  return instance
}
