"use strict";//created routing file questions.routes.js
const express = require("express"); //requiring express 
const questionlist = express.Router(); //this is allowing express to be used on our questionlist
// route and to export our data to that route 

const pool = require("./connection"); //this is requiring

//this is a GET endpoint to get the list of questipns from the database and send them to the front-end
questionlist.get("/questionlist", function (req, res) {
    pool.query("select * from questionlist order by random() limit 5;")
        .then(function (result) {
            res.send(result.rows);
    });
});

module.exports = questionlist;