const User=require("../models/user")
async function get_data(req,res){
    res.send("HE HEHEHE");
}
async function insert_data(req,res){
    //console.log(req.body)
    const user = new User(req.body);
    user.save();
}
async function check_data(req,res){
    //console.log("This isd weifubgwebfu")
    //console.log(req.body)
   let check= await User.findOne({name:req.body.name});
   if(check){
    //console.log("exist")
    //console.log(check)
  
    if(check.password==req.body.password){
        console.log("exist")
        res.send("exist")
    }
    else{
        console.log("wpass");
        res.send("wpass")
    }
   }
   else{
    //console.log("not")
    res.send("nouser")
   }
}
module.exports={
    get_data,insert_data,check_data
}