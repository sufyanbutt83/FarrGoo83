const mongoose = require('mongoose');
// const { string } = require('yargs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config({path:'./config.env'});
// const User = require('./userSchema');

const userSchemaRide = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    departure: {
        type: String,
        require: true
    },
    destination: {
        type:String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    },
    number:{
        type: Number,
        require: true
    },
    registration:{
        type: String,
        require: true
    },
    meetupPoint:{
        type:String,
        require:true
    },
    charges:{
        type: String,
        require: true
    }

})

const Driver = mongoose.model('rideDetials', userSchemaRide);
module.exports = Driver;