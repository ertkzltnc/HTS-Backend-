var mongoose=require("mongoose");

var schema=mongoose.Schema;
var speciesSchema=new schema({
    Name:{
        type:String
    }
});

module.exports=mongoose.model("Species",speciesSchema);