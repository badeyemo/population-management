const app = require('./index');
const logger = require('logger').createLogger()
const db = require('./models')

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    logger.log(`Server started on port ${PORT}`);
  });
});