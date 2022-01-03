const mongoose = require('mongoose');
// const { string } = require('yargs');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// const User = require('./userSchema');
// dotenv.config({path:'./config.env'});


const DetailsSchema = new mongoose.Schema({
    loginId:{
        type:String,
        require:true
    },
    loginName:{
       type:String,
       require:true
   },
   
   detials:[
        {
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
    }]
})

const Ride = mongoose.model('details', DetailsSchema);
module.exports = Ride;