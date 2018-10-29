var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/exercise/new-user', (req, res, next) => {
  // put the form data into a local variable
    const new_user = req.body.new_user;
    console.log('index.js:12', new_user);
    res.send({user : new_user});

    // save the data into the db through a new instance of a mongoose model


});


module.exports = router;
