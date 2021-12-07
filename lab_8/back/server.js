const path = require('path');
const express = require('express');
const cors = require('cors');

// Database
const monk = require('monk');
const db = monk('localhost:27017/agensydb_angular');

const customerRouter = require('./routes/customers');
const performerRouter = require('./routes/performers');
const projectRouter = require('./routes/projects');

const app = express();

app.use(cors());

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/customers', customerRouter);
app.use('/performers', performerRouter);
app.use('/projects', projectRouter);


const host = "localhost";
const port = "3000";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
});

module.exports = app;
