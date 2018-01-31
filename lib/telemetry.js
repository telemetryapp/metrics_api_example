const axios = require('axios')

let api

function sendMultipleMetrics (metrics) {
}

function sendOneMetric (metric, value) {
  console.log(`Send ${metric} of ${value} to ${axios.defaults.baseURL}`)
  const key = `$${metric}`
  api.post('/metrics', {[key]: value})

    // Success
    .then(function (response) {
      console.log('Data Sent to TelemetryTV, response is:')
      console.log(response.data)
    })

    // Error
    .catch(function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.error('TelemetryTV API Authentication Failed (wrong token)')
          process.exit(1)
        } else if (error.response.status === 429) {
          console.error('TelemetryTV API Rate Limited')
        } else {
          console.error(`API Response Error (${error.response.status})`)
        }

      } else if (error.request) {
        console.error(`API Request Error ${error.request}`)

      } else {
        console.error('Request Error', error.message)
      }
    })
}

function setup (host, token) {
  axios.defaults.baseURL = host
  axios.defaults.headers.common['Authorization'] = `Token ${token}`
  api = axios.create({})
}

module.exports = {
  sendMultipleMetrics,
  sendOneMetric,
  setup
}
