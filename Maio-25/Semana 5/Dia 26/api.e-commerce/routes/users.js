const express = require('express');
const router = express.Router();

let currId = 0;

function getNextId() {
  return ++currId;
}

const users = [
  {
    id: getNextId(),
    name: 'Bruno Morceli',
    email: 'pirofagista@gmail.com',
    password: '',
  },

  {
    id: getNextId(),
    name: 'John Doe',
    email: 'user2@gmail.com',
    password: 123,
  },

  {
    id: getNextId(),
    name: 'Maria João',
    email: 'user3@gmail.com',
    password: 123,
  }
];

router.post('/signup', (req, res, next) => {
    const { email, name, password } = req.body || {};

    if (!email) {
      return res
        .status(400).
        json ({ message: 'Email inválido'})
    }

    if (!name) {
      return res
        .status(400).
        json ({ message: 'Nome inválido'})
    }

    if (!password) {
      return res
        .status(400).
        json ({ message: 'Senha inválida'})
    }

    const existingEmail = users.some((u) => u.email === email)
    if (existingEmail) {
      return res
      .status(400).json({ message: 'O email já em uso uso'});
    }

    users.push({
      id: getNextId(),
      email,
      name,
      password,
    })

    res.status(201).json();
});

router.post('/signin', (req, res, next) => {
  const { email, password } = req.body || {};

  const index = users.findIndex((u) => u.email && u.password === password);
  
  if (index === -1) {
    return res
    .status(400)
    .json({ message: 'Credenciais inválidas.'});
  }

  res.json({ ok: true});  
});

module.exports = router;
