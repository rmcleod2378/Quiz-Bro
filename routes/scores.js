"use strict";

const express = require("express");
const scores = express.Router();
const pool = require("./connection");

scores.get("/scores", function(req, res){
    pool.query("select * from scores order by score desc").then(function(result){
        res.send(result.rows);
    });
});
scores.post("/scores", function(req, res){
    pool.query("insert into scores(player_name, score) values($1::text, $2::int)",
    [req.body.player_name, req.body.score]).then(function(){
        pool.query("select * from scores order by score desc").then(function(result){
        res.send(result.rows);
        });
    });
});

module.exports = scores;