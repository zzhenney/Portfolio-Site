var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/webserver', function(req, res, next) {
  res.render('webserver', { title: 'Web Server' });
});

module.exports = router;
