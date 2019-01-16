'use strict'
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      locationName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name can not be empty'
          }
        }
      },
      male: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Male value cannot be empty'
          }
        }
      },
      female: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Female value cannot be empty'
          }
        }
      }
    },
    {}
  )
  Location.associate = models => {
    Location.hasMany(
      models.Location,
      {as: 'childLocation', foreignKey: 'parentLocationId'},
      {onDelete: 'set null', hooks: true}
    )
  }
  return Location
}
