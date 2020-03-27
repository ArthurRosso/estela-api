const pool = require('./connection').pool

const getMedicos = (request, response) => {
  pool.query('SELECT * FROM medicos ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMedicoById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM medicos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMedico = (request, response) => {
  const { name, birthday } = request.body

  pool.query('INSERT INTO medicos (name, birthday) VALUES ($1, $2)', [name, birthday], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Medico added with ID: ${result.insertId}`)
  })
}

const updateMedico = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, birthday } = request.body

  pool.query(
    'UPDATE medicos SET name = $1, birthday = $2 WHERE id = $3',
    [name, birthday, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Medico modified with ID: ${id}`)
    }
  )
}

const deleteMedico = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM medicos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Medico deleted with ID: ${id}`)
  })
}

module.exports = {
  getMedicos,
  getMedicoById,
  createMedico,
  updateMedico,
  deleteMedico,
}