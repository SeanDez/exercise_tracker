require ('dotenv').load();
const mongoose = require("mongoose");


// create the schema
// create a model and set its singular name and schema
    //stamp the project name into the singular name since you use a shared database
// export the model

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
    }
});

const User = mongoose.model('ExerciseTracker_User', )