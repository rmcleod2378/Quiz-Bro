"use strict";//creating a route called scores.routes.js

const express = require("express");
const scores = express.Router();
const pool = require("./connection");
//this is the GET endpoint to get scores
scores.get("/scores", function(req, res){
    pool.query("select * from scores order by score desc limit 10").then(function(result){
        res.send(result.rows);
    });
});

//this is the POST endpoint to post new scores
scores.post("/scores", function(req, res){
    pool.query("insert into scores(player_name, score) values($1::text, $2::int)",
    [req.body.player_name, req.body.score]).then(function(){
        pool.query("select * from scores order by score desc").then(function(result){
        res.send(result.rows);
        });
    });
});

module.exports = scores;