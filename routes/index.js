const messages= [
  {
    text:'Hi there!',
    user:'Do you even exist?',
    added:new Date()
  },
  {
    text:'Hello hello ji!',
    user:'Chandni chowk wali anjali',
    added: new Date()
  },
  {
    text:'Kon h wo jisne mujhe mur k nahi dekha? Who is he?',
    user:'Poo',
    added:new Date()
  },
  {
    text:'Chandu k chacha ne chandi k chamchi se chutney chatai',
    user:'Golu Molu',
    added:new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board' , messages: messages });
});

router.get('/new',function(req,res,next){
  res.render('form');
});

router.post('/new', function(req,res){
  messages.push({text: req.body.msg, user: req.body.author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
