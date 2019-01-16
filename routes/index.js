const express = require('express');
const { createNewLocation, getAllLocation, updateLocation, deleteLocation } = require('../controllers/location')
const validateLocationFields = require('../validation/validateLocationFields');
const route = express.Router();

route.get('/locations', getAllLocation);

route.post('/locations', validateLocationFields, createNewLocation);

route.put('/locations/:name', validateLocationFields, updateLocation);

route.delete('/locations/:name', deleteLocation);

module.exports = route;