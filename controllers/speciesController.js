Species = require("../model/species.model");
response = require("../response");

exports.list = (req, res) => {
    Species.find({}, (err, species) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(species, null).success(res);
    });
}

exports.getById = (req, res) => {
    Species.findById(req.params.species_id, (err, species) => {
        if (err) { return new response(null,err).error500(res) }
        if(species){return new response(species, null).success(res)}
        return new response().notFound(res)
    })
}

exports.create = (req, res) => {
    var species = new Species();
    species.Name = req.body.Name;   
    species.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(species, null).created(res);
    });
}

exports.update = (req, res) => {
    Species.findById(req.params.species_id, (err, species) => {
        if (err) { return response(null,err).error500(res) }
        if(!species){return response().notFound(res)}
        species.Name = req.body.Name;        
        species.save((err) => {
            if (err) { return new response(null, err).error500(res) }
            return new response(species, null).success(res);
        })
    })
}
exports.delete = (req, res) => {
    Species.findOneAndDelete({ _id:req.params.species_id }, (err, species) => {
        if (err) { return new response(null, err).error500(res); }
        if (!species) { return new response().notFound(res); }
        return new response(species, null).success(res);
    })
}

