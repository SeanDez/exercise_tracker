const mongoose = require("mongoose");

// execute a constructor function to create the Schema class definition)
const ExerciseDataSchema = new mongoose.Schema({
   username : {
       type : String,
       required : true
   },
    description : {
       type : String,
       required : true
   },
    duration : {
       type : Number,
       required : true
   },
    date : {
       type : String,
       required : true
   },
});

const ExerciseData = mongoose.model('exercisetracker_exercisedata', ExerciseDataSchema);
module.exports = ExerciseData;