Animal = require("../model/animal.model");
response = require("../response");

exports.list = (req, res) => {
    Animal.find({}, (err, animals) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(animals, null).success(res);
    });
}

exports.getById = (req, res) => {
    Animal.findById(req.animals.animal_id, (err, animal) => {
        if (err) { return new response().notFound(res) }
        return new response(animal, null).success(res)
    })
}

exports.create = (req, res) => {
    var animal = new Animal();
    animal.Name = req.body.Name;
    animal.EarID = req.body.EarID;
    animal.Gender = req.body.Gender;
    animal.BirtDay = req.body.BirtDay;
    animal.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(animal, null).created(res);
    });
}

exports.update = (req, res) => {
    Animal.findById(req.params.animal_id, (err, animal) => {
        if (err) { return response().notFound(res) }
        animal.Name = req.body.Name;
        animal.EarID = req.body.EarID;
        animal.Gender = req.body.Gender;
        animal.BirtDay = req.body.BirtDay;
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

