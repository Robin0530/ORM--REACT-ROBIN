var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* 로그인 */
router.get('/login', function(req, res, next) {
  res.render('index');
});

/* 로그인 */
router.post('/login', function(req, res, next) {
  res.redirect('/');
});



/* 회원가입 */
router.get('/join', function(req, res, next) {
  res.render('join');
});

/* 회원가입 */
router.post('/join', function(req, res, next) {
  res.redirect('/join');
});



module.exports = router;
