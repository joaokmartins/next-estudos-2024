const express = require('express');
const router = express.Router();

const users = [
  {id: 1, name: 'ana', age: 25, email: 'aninha25@gmail.com' },
  {id: 2, name: 'bruno', age: 40, email: 'pirofagista@gmail.com' },
  {id: 3, name: 'carlos', age: 45, email: 'carlos_maroto@gmail.com' },
  {id: 4, name: 'daiana', age: 22, email: 'dai-me-paciencia@gmail.com' },
  {id: 5, name: 'eduardo', age: 40, email: 'edinho_zueiro@gmail.com' },
];


router.get('/users', (req, res, next) => {
  res.json(users);
});

router.get('/users/find/search/:text', (req, res, next) => {
  const { text } = req.params;

  console.log(text);
  
  res.json(
    users.filter((u) => u.name.includes(text))
  );

});

  router.get('/users/find', (req, res, next) => {
    const { id, name, age, email } = req.query;
  
    const filteredUsers = users.filter((user) => {
      if (id && user.id === Number(id)) {
        return true; 
      }

      if (name && user.name.includes(name)) {
        return true;
      }

      if (age && user.age === Number(age)) {
        return true;
      }

      if (email && user.email === email) {
        return true;
      }

      return false;
    });
    
    res.json(filteredUsers);

});

module.exports = router;
