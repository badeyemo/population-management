const {
  getAllLocations,
  addLocation,
  updateCurrentLocation,
  deleteLocationName,
} = require('../repository/locationRepository')

const createNewLocation = async (req, res, next) => {
  try {
    const locationData = req.body
    const newLocation = await addLocation(locationData)
    return res.status(200).json({
      status: 'success',
      message: 'Location created successfully',
      data: newLocation
    })
  } catch (error) {
    const errorMessage = error.errors[0].message
    res.status(400).json({status: 'error', message: errorMessage})
  }
}

const getAllLocation = async (req, res, next) => {
  try {
    const retrieveLocations = await getAllLocations()
    return res.status(200).json({
      status: 'success',
      message: 'Get all locations was successfull',
      data: retrieveLocations
    })
  } catch (error) {
    res.status(400).json({status: 'error', message: error.message})
  }
}

const updateLocation = async (req, res, next) => {
  try {
    const locationData = req.body
    const previousName = req.params.name
    const updatedLocation = await updateCurrentLocation(previousName, locationData)
    return res.status(200).json({
      status: 'success',
      message: 'Location name was updated successfully',
  })
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
  
}

const deleteLocation = async (req, res, next) => {
  try {
  const locationName = req.params.name
  if(!locationName){
    res.status(400).json({ status: 'error', message: 'location name is missing ' })
  }
  await deleteLocationName(locationName)
  return res.status(200).json({
    status: 'success',
    message: 'Location name deleted successfully',
  })
  } catch (error) {
    res.status(400).json({ status: 'error', message: err.message }); 
  }
  
}

module.exports = {
  createNewLocation,
  getAllLocation,
  updateLocation,
  deleteLocation
}
