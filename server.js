var express = require('express');
var morgan = require('morgan'); // JUST FOR LOGS
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

require("./routes/routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})
