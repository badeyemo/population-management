const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Population Management API',
  });
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

module.exports = app;