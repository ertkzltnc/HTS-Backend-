Herd = require("../model/herd.model");
response = require("../response");

exports.list = (req, res) => {
    Herd.find({}, (err, herds) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(herds, null).success(res);
    });
}

exports.getById = (req, res) => {
    Herd.findById(req.herds.herd_id, (err, herd) => {
        if (err) { return new response().notFound(res) }
        return new response(herd, null).success(res)
    })
}

exports.create = (req, res) => {
    var herd = new Herd();
    herd.Name = req.body.Name;   
    herd.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(herd, null).created(res);
    });
}

exports.update = (req, res) => {
    Herd.findById(req.params.herd_id, (err, herd) => {
        if (err) { return response().notFound(res) }
        herd.Name = req.body.Name;        
        herd.save((err) => {
            if (err) { return new response(null, err).error500(res) }
            return new response(herd, null).success(res);
        })
    })
}
exports.delete = (req, res) => {
    Herd.findOneAndDelete({ _id:req.params.herd_id }, (err, herd) => {
        if (err) { return new response(null, err).error500(res); }
        if (!herd) { return new response().notFound(res); }
        return new response(herd, null).success(res);
    })
}

