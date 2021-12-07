var express = require('express');
var router = express.Router();

// GET /performers
router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('performers');
    collection.find({}, {}, function (e, docs) {
        // console.log(docs);
        res.json(docs);
    });
});

// GET /performers/{id}
router.get('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('performers');
    var performerId = req.params.id;
    collection.findOne({id: performerId}, {}, function (e, docs) {
        res.json(docs);
    });
});

// POST /performers
router.post('/', function (req, res) {
    var db = req.db;
    var collection = db.get('performers');
    collection.findOne({ id: req.body.id }, {}, function (e, docs) {
        return !!docs;
    }).then(function(performerExists) {
        if (performerExists) {
            res.send(`performer with id ${req.body.id} already exists`);
        } else {
            var performer = {
                id: req.body.id,
                number: req.body.number,
                experience: req.body.experience,
                workers: req.body.workers
            };
            collection.insert(performer, function (e, docs) {
                if (e) {
                    res.send(e);
                } else {
                    // res.redirect(`/${performer.id}`);
                    res.send(`Successfully created performer [${performer.id}] ${performer.number} ${performer.experience} (${performer.workers})`);
                }
            });
        }
    });
});

// PUT /performers
router.put('/', function (req, res) {
    var db = req.db;
    var collection = db.get('performers');
    var performer = {
        id: req.body.id,
        number: req.body.number,
        experience: req.body.experience,
        workers: req.body.workers
    };
    collection.update({ id: performer.id }, performer, function (e, docs) {
        if (e) {
            res.send(e);
        } else {
            // res.redirect(`/${performer.id}`);
            res.send(`Successfully updated performer with id [${performer.id}]`);
        }
    });
});

// DELETE /performers/{id}
router.delete('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('performers');
    var performerId = req.params.id;
    collection.remove({ id: performerId }, {}, function (e, docs) {
        if (e) {
            res.send(e);
        } else {
            res.send(`Successfully deleted performer with id ${performerId}`);
        }
    });
});

module.exports = router;