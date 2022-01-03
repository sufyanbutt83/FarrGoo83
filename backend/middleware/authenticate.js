const express = require('express');
const jwt = require('jsonwebtoken');
const app= express();
var cookieParser = require('cookie-parser');
const User  = require('../models/user.model');
// const { responsiveFontSizes } = require('@material-ui/core');
app.use(cookieParser());


       const authenticate = async (req,res,next) => {
           console.log('hello');
        
        try{
            var cookie123 = req.headers.cookie;
            var token = cookie123.split('=')[1];
           // console.log('----------------------------------- cookie123');
           // console.log(token);
           // console.log('----------------------------------- cookie123');
            
           // try{
           // console.log(token);
            const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
            //console.log(verifyToken);
            const rootUser = await User.findOne({ _id:verifyToken._id , "tokens.token":token});
            console.log('hello RootUser');
            if(!rootUser)
            {
                throw new Error('User not found')
            }

            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            //console.log('=====================userID');
            //console.log(req.rootUser);
            //console.log(req.userID);
           
        }catch(err)
        {
                 res.status(401).send('no token provided');
                console.log(err);
        }
        //else
        //{
         //   res.status(401).send('no token provided');
        //}
        
    
     //if(!rootUser)
     //{
     //   throw new Error('user not found')
     //}

    // req.token = token;
    // req.rootUser = rootUser;
    // req.userID = rootUser._id;
//
     next();

// } catch(err){
//     res.status(401).send('no token provided');
//    console.log(err);
// }

    }

module.exports = authenticate;