const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Population Management API',
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// error handlers
app.use((err, req, res) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;