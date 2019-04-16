const request = require('request')

const url = 'https://api.darksky.net/forecast/44ff228b8a3200936dfa08da322a8e87/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {

})