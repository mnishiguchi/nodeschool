// Create an Express application.
// The `app` object conventionally denotes the Express application.
var express = require( 'express' )
var app     = express()

// Routes
app.get( '/home', function( req, res ) {
  res.end( 'Hello World!' )
})

// app.listen( 3000 )
app.listen( process.argv[ 2 ] || 3000 )
