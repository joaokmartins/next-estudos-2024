var express = require('express');
var router = express.Router();

const fruits =  [
  { id: ' 1', name: 'Melancia' },
  { id: '2', name: 'Mamão' },
  { id: '3', name: 'Pêra' },
  { id: '4', name: 'Uva' },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ hello: 'world' });
});

router.get('/fruits', function(req, res, next) {
  res.json(fruits);
});

router.get('/fruits/:id', function(req, res, next) {
  const { id } = req.params;

  const index = fruits.findIndex((fruit) => fruit.id === id);
  if (index < 0) {
    return res.status(404).json({ message: 'Fruta não encontrada' });
  }

  res.json(fruits[index]);
});

module.exports = router;
