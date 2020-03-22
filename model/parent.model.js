var mongoose=require("mongoose");
var animal=require("./animal.model");

var schema=mongoose.Schema;

var parentSchema=new Schema({
    MotherBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Animal"
    },
    FatherBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Animal"
    },
    ChildBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Animal"
    }
});

module.exports=mongoose.model("Parent",parentSchema);