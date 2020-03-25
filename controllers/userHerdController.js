UserHerd = require("../model/userherd.model");
response = require("../response");

const { validationResult } = require("express-validator")

exports.list = (req, res) => {
    UserHerd.find({ UserBy: req.body.UserBy._id }, (err, userHerds) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(userHerds, null).success(res);
    });
}

exports.getById = (req, res) => {
    UserHerd.findById(req.params.userherd_id, (err, userHerd) => {
        if (err) { return new response(null, err).error500(res) }
        if (userHerd) { return new response(userHerd, null).success(res) }
        return new response().notFound(res)
    })
}

exports.create = (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) { return new response(null, errors.array()).error400(res); }
    var userHerd = new UserHerd();
    userHerd.UserBy = req.body.UserBy._id;
    userHerd.HerdBy = req.body.HerdBy._id;
    userHerd.save((err) => {
        if (err) { return new response(null, err).error500(res) }
        return new response(userHerd, null).created(res);
    });
}

exports.update = (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) { return new response(null, errors.array()).error400(res); }
    UserHerd.findById(req.params.userherd_id, (err, userHerd) => {
        if (err) { return response(null, err).error500(res) }
        if (!userHerd) { return response().notFound(res) }
        userHerd.UserBy = req.body.UserBy._id;
        userHerd.HerdBy = req.body.HerdBy._id;
        userHerd.save((err) => {
            if (err) { return new response(null, err).error500(res) }
            return new response(userHerd, null).success(res);
        })
    })
}
exports.delete = (req, res) => {
    UserHerd.findOneAndDelete({ _id: req.params.userherd_id }, (err, userHerd) => {
        if (err) { return new response(null, err).error500(res); }
        if (!userHerd) { return new response().notFound(res); }
        return new response(userHerd, null).success(res);
    })
}

