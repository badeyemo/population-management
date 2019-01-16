const { validate } = require('jsonschema');

const locationSchema = require('../schema/locationSchema.json');


const validateLocationFields = (req, res, next) => {
  let payload = {};
  payload = req.body;
  const result = validate(payload, locationSchema);
  if((payload.male && payload.female) < 0 ){
    res.status(400).json({status: 'error', message: 'Male or Female cannot be negative'})
  }
  if (!result.valid) {
    return next(result.errors.map(error => error.message));
  }
  next();
};

module.exports = validateLocationFields;