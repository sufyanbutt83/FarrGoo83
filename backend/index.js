const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require('dotenv').config();


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log("connected"))
.catch((err)=>{
    console.log("an error occured while connecting to the mongoDB database "+ err);
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');



app.use('/', usersRouter);




app.listen(port, () => {
    console.log(`Server is running at port :${port}`)
})