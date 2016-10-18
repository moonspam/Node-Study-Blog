/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    return res.render("home", {
        title: "moonlog",
        description: "let me introduce myself",
        url: req.headers.host
    });
});

module.exports = router;