const db = require('../models/index');

const getAllLocations = async () => {
  const result = await db.Location.findAll({
    include: {
      association: 'childLocation'
    }
  })
  return result
}

const addLocation =  (newLocationData) => {
  return db.Location.create(newLocationData)
}

const updateCurrentLocation = async(locationName, locationData) => {
  const locationExist = await db.Location.findOne({
    where: {
      locationName: locationData.locationName,
    }
  })
  if (locationExist){
    return db.Location.update({locationName}, {
      where: {
      locationName: locationData.locationName
    }
  })
  }
}

const deleteLocationName = (locationName) => {
  return db.Location.destroy({
    where: {
      locationName
    }
  })
}




module.exports = {
  getAllLocations,
  addLocation,
  updateCurrentLocation,
  deleteLocationName
}