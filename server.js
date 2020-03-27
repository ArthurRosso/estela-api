const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const migrations = require('./migrations')
const medico = require('./medico')
const port = 3000

app.use(migrations.createDatabase)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'GoBov API' })
})

app.get('/medicos', medico.getMedicos)
app.get('/medicos/:id', medico.getMedicoById)
app.post('/medicos', medico.createMedico)
app.put('/medicos/:id', medico.updateMedico)
app.delete('/medicos/:id', medico.deleteMedico)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})