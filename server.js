"use strict";
const express = require("express");
const app = express();
const questionlist = require("./routes/questionlist");
const scores = require("./routes/scores");


app.use(express.static("./public"));
app.use(express.json());
app.use("/", questionlist);
app.use("/", scores);

app.listen(8080, _ => console.log("Server is running"));