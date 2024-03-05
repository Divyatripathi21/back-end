var express = require('express');
var router = express.Router();


const userModel=require("./users");





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});




//create

router.get('/create', async function(req, res, next) {
 const createdUser=await userModel.create({
    username:"ayuhs",
    age:22,
    name:"divy_tripathi",
    id:1,
  });
  res.send(createdUser);
  // console.log(createdUser);
});






//read

/**
 router.get('/allUsers',async function(req,res,next){
  let allusers=await userModel.findOne({username:"divy"});

  res.send(allusers);

  next();
})

 */



//Dlete

router.get("/delete",async function(req,res){
 let deleteUser=await userModel.findOneAndDelete({username:"shashwat"});

 res.send(deleteUser);
});



router.get("/allUsers",async function(req,res){
let all=await userModel.find()

res.send(all);
});


module.exports = router;
