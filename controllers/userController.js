User=require("../model/user.model");
response = require("../response");

exports.create=(req,res)=>{
    var user=new User();
    user.Name=req.body.Name;
    user.Surname=req.body.Surname;
    user.UserName=req.body.UserName;
    user.Password=req.body.Password;
    user.BusinessID=req.body.BusinessID;    
    user.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(user, null).created(res);
    });
}

exports.login=(req,res)=>{
    var newUser=new User({
        UserName:req.body.UserName,
        Password:req.body.Password
    })
    User.findOne({UserName:newUser.UserName},(err,user)=>{
        if (err) { return new response(null, err).error500(res); }
        if (!user) { return new response().notFound(res); }
        else if(user.Password==newUser.Password){return new response(user,null).success(res)}
        return new response().notFound(res); 

    })
}