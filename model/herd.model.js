var mongoose=require("mongoose");

var schema=mongoose.Schema;
var herdSchema=new schema({
    Name:{
        type:String
    }
});

module.exports=mongoose.model("Herd",herdSchema);

