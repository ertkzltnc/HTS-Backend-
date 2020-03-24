Animal = require("../model/animal.model");
response = require("../response");

const {validationResult}=require("express-validator")

exports.list = (req, res) => {
    Animal.find({}).sort({
        created:-1
    }).populate('SpeciesBy','Name').populate('HerdBy','Name').exec((err, animals) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(animals, null).success(res);
    });
}

exports.getById = (req, res) => {
    Animal.findById(req.params.animal_id).populate('SpeciesBy','Name').populate('HerdBy','Name').exec((err, animal) => {
        if (err) { return new response(null,err).error500(res) }
        if(animal){return new response(animal, null).success(res)}
        return new response().notFound(res)
        
    })
}

exports.listByHerdId=(req,res)=>{
    let _id=req.params.herd_id;

    Animal.find({HerdBy:_id}).populate('SpeciesBy','Name').populate('HerdBy','Name').exec((err,animals)=>{
        if(err){ return new response(null,err).error500(res)}
        return new response(animals,null).success(res);
    })
}

exports.listBySpeciesId=(req,res)=>{
    let _id=req.params.species_id;

    Animal.find({SpeciesBy:_id}).populate('SpeciesBy','Name').populate('HerdBy','Name').exec((err,animals)=>{
        if(err){ return new response(null,err).error500(res)}
        return new response(animals,null).success(res);
    })
}


exports.create = (req, res) => {
    let errors=validationResult(req);
    if(!errors.isEmpty()){return new response(null, errors.array()).error400(res);}
    var animal = new Animal();
    animal.Name = req.body.Name;
    animal.EarID = req.body.EarID;
    animal.Gender = req.body.Gender;
    animal.BirtDay = req.body.BirtDay;
    animal.HerdBy=req.body.HerdBy._id;
    animal.SpeciesBy=req.body.SpeciesBy._id;
    animal.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(animal, null).created(res);
    });
}

exports.update = (req, res) => {
    let errors=validationResult(req);
    if(!errors.isEmpty()){return new response(null, errors.array()).error400(res);}
    Animal.findById(req.params.animal_id, (err, animal) => {
        if (err) { return response(null,err).error500(res) }
        if(!animal){return response().notFound(res)}
        animal.Name = req.body.Name;
        animal.EarID = req.body.EarID;
        animal.Gender = req.body.Gender;
        animal.BirtDay = req.body.BirtDay;
        animal.HerdBy=req.body.HerdBy._id;
        animal.SpeciesBy=req.body.SpeciesBy._id;
        animal.save((err) => {
            if (err) { return new response(null, err).error500(res) }
            return new response(animal, null).success(res);
        })
    })
}
exports.delete = (req, res) => {
    Animal.findOneAndDelete({ _id:req.params.animal_id }, (err, animal) => {
        if (err) { return new response(null, err).error500(res); }
        if (!animal) { return new response().notFound(res); }
        return new response(animal, null).success(res);
    })
}

