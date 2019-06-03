const routes = require('express').Router();
//import other routes here
const category = require('./category');
routes.use('/category', category);
//we can import other routes here

module.exports = routes;