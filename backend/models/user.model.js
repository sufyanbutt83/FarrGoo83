const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
require('dotenv').config();



const userSchema = new Schema({
   username: {
      type: String,
      required: true
   },

   email: {
      type: String,
      required: true
   },

   password: {
      type: String,
      required: true
   },

   cpassword: {
      type: String,
      required: true
   },
   // number: {
   //    type: Number,
   //    require: true
   // },

   tokens: [
      {
         token: {
            type: String,

         }
      }
   ]

},
);



userSchema.pre('save', async function (next) {
   console.log("heloo from inside")
   if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 12);
      this.cpassword = await bcrypt.hash(this.cpassword, 12);

   }
   next();
});

userSchema.methods.generateAuthToken = async function () {
   try {
      let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: token });
      await this.save();
      return token
   } catch (err) {
      console.log(err)
   }
}

const User = mongoose.model('user', userSchema);
module.exports = User;