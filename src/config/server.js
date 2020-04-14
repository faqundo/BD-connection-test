var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");


var app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app/views"));  //path.join se encarga de unir directorios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')));

module.exports = app;

