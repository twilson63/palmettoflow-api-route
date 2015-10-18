var pc = require('palmettoflow-client')
var jsonBody = require('body/json')
var sendJson = require('send-data/json')
var sendError = require('send-data/error')

module.exports = function (config, ee) {
  var client = pc(config, ee)
  return function (req, res) {
    jsonBody(req, res, function (err, body) {
      if (err) { return sendError(req, res, { body: err}) }
      client(body, function (err, result) {
        if (err) { return sendError(req, res, { body: err}) }
        sendJson(req, res, result)
      })
    })
  }
}