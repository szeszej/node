const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const yargs = require('yargs')

//Location command
yargs.command({
  command: 'forecast',
  describe: 'Get weather forecast for a given location',
  builder: {
    location: {
      describe: 'Location information',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (!argv.location) {
      return console.log('Please provide a location')
    }
    geoCode(argv.location, (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return console.log('Error: ', error)
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return console.log('Error: ', error)
        }
        console.log(location)
        console.log(forecastData)
      })
    })
  },
})

yargs.parse()
