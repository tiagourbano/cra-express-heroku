const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.json({
    status: 'OK',
    message: 'It\'s working!'
  });
});


router.post('/products', (req, res) => {
  res.json({
    status: 'OK',
    message: 'It\'s working!'
  });
});



module.exports = router;
