const express = require('express');
const router = require('../router/route');

module.exports = (app) => {
    // app.use(express.bodyParser());
    // app.use(express.urlencoded());

    const expressRouter = express.Router();
    app.use('/', expressRouter);
    router(expressRouter);
    app.use((req, res, next) => {
       next();
    });
    app.use((err, req, res, next) => {
       console.log('Error: ', err);
     });
}

