const schedule = require('node-schedule')
const assert = require('assert')
const telemetry = require('../lib/telemetry.js')

function setup (mongo) {
  const db = mongo.db('database')
  const accounts = db.collection('accounts')
  schedule.scheduleJob('0 0 * * *', function () {
    getAccountCounts(accounts)
  })
}

function getAccountCounts (accounts) {
  accounts.count(function (err, count) {
    assert.equal(err, null)
    telemetry.sendOneMetric('accounts.count', count)
  })
}

module.exports = {
  setup
}
