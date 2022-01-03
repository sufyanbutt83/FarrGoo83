// const express = require('express')
// const router = express.Router();
// const authenticate = require('../middleware/authenticate');
// var cookieParser = require('cookie-parser');
// const app= express();
// app.use(cookieParser());


// const Flight = require('../models/flight.model');
// const Ride=require('../models/Details.model')



// router.post('/flightDetails',authenticate, async (req,res)=>{ 
//     try{
      
//     console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- rideDetails post');
    
//       const {userName,departure,destination,date,time,number,registration,meetupPoint,charges}=req.body;
     
//     if(!userName||!departure||!destination||!date||!time||!number||!registration||!meetupPoint||!charges)
//     {
//       return res.status(422).json({error:"plz filled the field"});
//     }
//     else{
//       const loginData = await req['rootUser'].id;
//       const loginUsername = await req['rootUser'].name;
//       console.log(loginUsername);
//       console.log("=========================");
//       const userData = new Ride({loginId:loginData,loginName:loginUsername,detials:[{userName,departure,destination,date,time,number,registration,meetupPoint,charges}]});
//       const allAds = new Flight({userName,departure,destination,date,time,number,registration,meetupPoint,charges});
//       console.log("=====================12121====");
//       //const data = await User.findOneAndUpdate(loginData,userData);
//            //console.log(data);
//            await userData.save();
//            await allAds.save();
//            res.status(201).json({message: "Added"});
    
//         }
//       }catch(e)
//     {
//       console.log('-=-=-=-=-=-=-=-=- Eror =-=-=--=-=-=-=-==--==-=-');
//       console.log(e);
//       res.send(e);
//     }
//   });



//   router.get('/flightDetails',authenticate, async (req,res)=>{ 
//     console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- rideDetails');
//     try{
//        const driverData = await Driver.find();
//        res.send(driverData);
//        //console.log(driverData);
       
//     }catch(e)
//     {
//          res.send(e);
//     }
//   });

//   /////////////////////////////////////////////////////////////////////////

  
// router.get('/myRide',authenticate,async (req,res)=>{ 
//     console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- myRide');
//     try{
//       const loginData = await req['rootUser'].id;
//       const userData = await req['rootUser'].name;
//       console.log(userData);
//        const driverData = await Ride.find({loginId:loginData});
//        console.log(driverData)
//        res.send(driverData);
       
//     }catch(e)
//     {
//          res.send(e);
//     }
//   });
  
//   router.get('/home',authenticate,async(req,res)=> {
//     try {
//       console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- hello');
//       // console.log(req)
//       console.log(req['rootUser'].email)
//       res.send({ rootUser: req['rootUser'] })
//       // res.send('hello world');
//     }catch(e)
//     {
//       console.log('-=-=-=-=-=-=-=-=- Eror =-=-=--=-=-=-=-==--==-=-');
//       console.log(e);
//       res.send(e);
//     }
//   });
  
//   router.get('/logout',(req,res)=> {
//     console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- logout');
//     res.clearCookie("jwt");
//     res.redirect("/login");
//     res.status(200).send('User logout')
//   });
  




// module.exports = router;