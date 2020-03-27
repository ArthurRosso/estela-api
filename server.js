const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { UserEstela } = require('./app/models');
const { Medico } = require('./app/models');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//UserEstela.create({ name: 'Admin', email: 'admin@example.com.br', password: '123456', createdAt: Date.now(), updatedAt: Date.now() });

app.get('/', (req, res) => {
    res.json({ info: 'Estela API' })
});

app.post('/register', async (req, res) => {
    const user = await UserEstela.create(req.body);
    res.json(user);
});

app.get('/userInfo/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const user = await UserEstela.findByPk(id) 
    
    res.json(user);
});

app.put('/userUpdate/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    await User.destroy({
        where: {
          id: id
        }
    });

    const user = await UserEstela.create(req.body);
    res.json(user);
});

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id)

    await User.destroy({
        where: {
          id: id
        }
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});