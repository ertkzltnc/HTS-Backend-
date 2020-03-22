var mongoose=require("mongoose");

var schema=mongoose.Schema;
var userSchema=new schema({
    Name:{
        type:String
    },
    Surname:{
        type:String
    },
    UserName:{
        type:String,required:true
    },
    Password:{
        type:String,required:true
    },
    Phone:{
        type:String
    },
    BusinessID:{
        type:String
    },
    Created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
    Active:{
        type:Boolean,require:true
    }
});

module.exports=mongoose.model("User",userSchema);