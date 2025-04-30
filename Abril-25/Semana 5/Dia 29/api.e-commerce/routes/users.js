const express = require('express');
const router = express.Router();

let = currId = 0;
function getNextId() {
  return ++currId;
}

const users = [
  { 
    id: getNextId(), 
    email: 'pirofagista@gmail.com', 
    name: 'Bruno Morceli',
    password: '123' 
  },

  { 
    id: getNextId(), 
    email: 'user2@gmail.com', 
    name: 'John Doe',
    password: '123',
  },

  {
    id: getNextId(),
    email: 'user3@gmail.com',
    name: 'Maria João',
    password: '123',
  },
];

router.post('/signup', function(req, res, next) {
  const { email , name, password} = req.body || {};

  if (!email) {
    return res
      .status(400)
      .json({ message: 'Email inválido.' });
  }

  if (!name) {
    return res
      .status(400)
      .json({ message: 'Nome inválido.' });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: 'Senha inválida.' });
  }

  const existingUser = users.some((u) => u.email == email)
  if(exisingEmail) {
    return res
    .status(400)
    .json({ message: 'O email já está em uso.'})
  }

  users.push({
    id: getNextId(),
    email,
    mame,
    password,  
  });

  res.status(201).json(); 

});

router.post('/signin', function(req, res, next) {
  const { email, password } = req.body || {}; 
  
  const index = users
    .findIndex((u) => u.email == email & u.password == password);

  if (index === -1) {
    res
    .status(400)
    .json({ message: 'Credenciais inválidas.' });
  }

  res.json({ ok: true});

});


module.exports = router;
