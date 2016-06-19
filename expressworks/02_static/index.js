var path    = require('path')
var express = require('express')

var app = express()

// Serving static assets like HTML or CSS files in the specified directory.
app.use(
  express.static(
    process.argv[3] || path.join(__dirname, 'public')
  )
)

app.listen( process.argv[2] || 3000 )
