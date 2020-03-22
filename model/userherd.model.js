var mongoose=require("mongoose");
var user=require("./user.model");
var herd=require("./herd.model");

 var userherdschema=new schema({
    UserBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    HerdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Herd"
    }

 })

module.exports=mongoose.model("UserHerd",userherdschema);