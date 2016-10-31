/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
var socketio = require("socket.io");

var homeRouter = require("./routes/home");

mongoose.connect("mongodb://localhost/blog")
var db = mongoose.connection;

db.once("open", function() {
    console.log("DB is connected");
});


var app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use("/static/", express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(morgan("dev"));

// Router
app.use("/", homeRouter);

var port = process.env.PORT || 5555; // cafe24 port 8001
app.listen(port, function() {
    console.log("Server is running on " + port);
});