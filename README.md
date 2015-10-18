# Palmetto Flow api route

Basic NodeJS route that handles a palmetto flow event request

## usage

``` js
var http = require('http')

var ee = palmetto()

var par = require('palmettoflow-api-route')
var palmettoRoute = par({ timeout: 2000 }, ee)

var server = http.createServer(function (req, res) {
  if (req.url === '/api' && req.method === 'POST') {
    return palmettoRoute(req, res)
  }
  // handle other routes
})

server.listen(process.env.PORT || 3000)
```

## api

main function (config, ee)

The config section is looking for the timeout setting and the `ee` is the palmettoflow adapter

