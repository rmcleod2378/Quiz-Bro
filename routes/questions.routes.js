"use strict";
const express = require("express");
const questionlist = express.Router();
const pool = require("./connection");

questionlist.get("/questionlist", function(req, res){
    pool.query("select * from questionlist order by random() limit 5;").then(function(result){
        res.send(result.rows);
    });
});


// questionlist.post("/questionlist", function(req, res){
//     pool.query("insert into questionlist(questions, choice_one, choice_two, choice_three, choice_four, answer) values ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text)", [req.body.questions, req.body.choice_one, req.body.choice_two, req.body.choice_three, req.body.choice_four, req.body.answer]).then(function(){
//         pool.query("select * from questionlist").then(function(req, res){
//             res.send(result.rows);
//         })
//     })


module.exports = questionlist;