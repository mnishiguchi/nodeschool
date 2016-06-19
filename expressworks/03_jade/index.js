var path    = require('path')
var express = require('express')

var app = express()

// Set the path to the `views` directory.
app.set('views',  path.join(__dirname, 'views'))

// Set the template engine.
app.set('view engine', 'jade')

// Set the routes.
app.get('/home', function(req, res) {
  // Render a file called `index` in the specified directory (i.e., `views`)
  res.render('index', {
    date: new Date().toDateString()
  })
})

app.listen( process.argv[2] || 3000 )
