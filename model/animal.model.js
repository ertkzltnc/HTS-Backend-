var mongoose=require("mongoose");
var herd=require("./herd.model");
var species=require("./species.model");

var schema=mongoose.Schema;
var animalschema=new schema({

    Name:{
        type:String
    },
    EarID:{
        type:String,require:true,unique:true,index:true
    },
    Gender:{
        type:String,require:true
    },
    BirtDay:{
        type:Date
    },
    SpeciesBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Species"
    },
    HerdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Herd"
    },
    Created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
    Active:{
        type:Boolean,
        default:()=>{
            return true;
        }
    },
    PassiveDate:{
        type:Date     
    }   

});

module.exports=mongoose.model("Animal",animalschema);