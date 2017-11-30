var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/example1', function(req, res, next) {
  console.log('eample1')
  res.render('example1.html', { title: '示例1' });
});

router.get('/example2', function(req, res, next) {
  console.log('eample2')
  res.render('example2.html', { title: '示例2' });
});

router.get('/example3', function(req, res, next) {
  res.render('example3.html', { title: '示例3' });
});

router.get('/example4', function(req, res, next) {
  res.render('example4.html', { title: '示例4' });
});

module.exports = router;
