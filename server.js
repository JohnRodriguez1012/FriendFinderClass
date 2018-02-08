//Dep
var express = require('express');
var parser =require('body-parser')

//App data

var app = express();
var PORT = process.env.PORT || 3000;

//Parse
app.use(express.static(__dirname + "/app/public"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());
app.use(parser.json({ type: "application/vnd.api+json" }));

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Make sure it's listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

