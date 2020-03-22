var mongoose=require("mongoose");
var animal=require("./animal.model");

var schema=mongoose.Schema;

var inseminationSchema=new Schema({
    MotherBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Animal"
    },
    FatherBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Animal"
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

module.exports=mongoose.model("Insemination",inseminationSchema);