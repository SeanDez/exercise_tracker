require("dotenv").load();
var express = require('express');
var router = express.Router();

const User = require("../models/user");
const ExerciseData = require("../models/exercise_data");

// database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/exercise/new-user', (req, res, next) => {
  // put the form data into a local variable
    const new_user_data = req.body.new_user;

    // create an instance of the schema class and set values to each key
    const new_user_document = new User({
        username : new_user_data
    });

    // save it
    new_user_document.save(error => console.log(error));


    res.send({user : new_user_document});

    // save the data into the db through a new instance of a mongoose model


});


router.post('/api/exercise/add', (req, res, next) => {
    const exercise_data_document = new ExerciseData({
        username : req.body.username,
        description : req.body.description,
        duration : req.body.duration,
        date : req.body.date
    });
    const saved_data = exercise_data_document.save((e, document) => {
      if (e) {
        console.log(e)
      }
      return document
    });
    console.log("saved", saved_data);
    res.send({exercise_data : 'test'})
});



module.exports = router;
