const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicekro");



const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number,
  id:Number,
})


module.exports=mongoose.model("user",userschema);
