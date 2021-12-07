var express = require('express');
var router = express.Router();

// GET /projects
router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('projects');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

// GET /projects/{id}
router.get('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('projects');
    var projectId = req.params.id;
    collection.findOne({id: projectId}, {}, function (e, docs) {
        res.json(docs);
    });
});

// POST /projects
router.post('/', function (req, res) {
    var db = req.db;
    var collection = db.get('projects');
    collection.findOne({ id: req.body.id }, {}, function (e, docs) {
        return !!docs;
    }).then(function(projectExists) {
        if (projectExists) {
            res.send(`project with id ${req.body.id} already exists`);
        } else {
            var project = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                customer: req.body.customer,
                skill: req.body.skill
            };
            collection.insert(project, function (e, docs) {
                if (e) {
                    res.send(e);
                } else {
                    // res.redirect(`/${project.id}`);
                    res.send(`Successfully created project [${project.id}] ${project.name} ${project.description} ${project.customer})`);
                }
            });
        }
    });
});

// PUT /projects
router.put('/', function (req, res) {
    var db = req.db;
    var collection = db.get('projects');
    var project = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        customer: req.body.customer,
        skill: req.body.skill
    };
    collection.update({ id: project.id }, project, function (e, docs) {
        if (e) {
            res.send(e);
        } else {
            // res.redirect(`/${project.id}`);
            res.send(`Successfully updated project with id [${project.id}]`);
        }
    });
});

// DELETE /projects/{id}
router.delete('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('projects');
    var projectId = req.params.id;
    collection.remove({ id: projectId }, {}, function (e, docs) {
        if (e) {
            res.send(e);
        } else {
            res.send(`Successfully deleted project with id ${projectId}`);
        }
    });
});

module.exports = router;