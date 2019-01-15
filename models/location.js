'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    locationName: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};