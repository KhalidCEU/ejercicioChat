const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: "Login Page", user: req.session.user});
});

router.post('/', async function(req, res, next) {
  const user = req.body.user;
  //Comprobación si el usuario es correcto
  if(await database.users.isLoginRight(user, req.body.pass)){
    req.session.message = "¡Login correcto!";
    req.session.user = user;
    console.log("Session username in login page is: ", req.session.user );
    res.redirect('chat');
  } else {
    req.session.error = "Usuario o contraseña incorrectas";
    res.redirect('login');
  }
});

module.exports = router;