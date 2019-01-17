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

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

module.exports = app;