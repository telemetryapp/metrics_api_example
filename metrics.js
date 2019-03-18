#!/usr/bin/env node

// Parse Command Lines
const cliarg = require('commander')
cliarg
  .version('1.0.0')
  .option('-t, --token [token]', 'TelemetryTV API Token')
  .option('-m, --mongo [server]', 'Use the specified mongodb server URL [mongodb://localhost:27017]', 'mongodb://localhost:27017')
  .option('-a, --api [api]', 'Use the specified metrics API host', 'https://metrics.telemetrytv.com')
  .parse(process.argv)

// Const
const MongoClient = require('mongodb').MongoClient
const url = cliarg.mongo
const accounts = require('./metrics/accounts.js')
const telemetry = require('./lib/telemetry.js')

console.log(`Sending metrics to ${cliarg.api}`)

if (cliarg.token === undefined) {
  console.error('You must specify a TelemetryTV API Token')
  process.exit(1)
}

// Check for QA
telemetry.setup(cliarg.api, cliarg.token)

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true }, function (err, mongo) {
  if (err !== null) {
    console.log('Unable to connect to MongoDB')
  } else {
    setup(mongo)
  }
})

// Setup jobs
function setup (mongo) {
  accounts.setup(mongo)
}
