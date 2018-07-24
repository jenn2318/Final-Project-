const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Emails
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Emails
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log('In create in t he controller!')
            db.Emails.create(req.body)
            .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Emails
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Emails
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    }
};
