const pool = require('./connection').pool

var users

const createDatabase = (request, response) => {
  pool.query(
        'CREATE TABLE IF NOT EXISTS UserEstela (ID SERIAL PRIMARY KEY, name VARCHAR(32), email VARCHAR(32), password VARCHAR(64));', 
    (error, results) => {
        if (error) {
            throw error
        }
  })

  pool.query(
        'CREATE TABLE IF NOT EXISTS Medico (ID SERIAL PRIMARY KEY, name VARCHAR(32), email VARCHAR(32), password VARCHAR(64));', 
    (error, results) => {
        if (error) {
            throw error
        }
    })

  response.status(200).send(`Tables created`);
}

module.exports = {
  createDatabase
}