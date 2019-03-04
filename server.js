"use strict";//start with the server.js file creating an Express service
const express = require("express");//requiring express
const app = express();//creating an instance of express
const questionlist = require("./routes/questions.routes");//requiring the questionlist route and path
const scores = require("./routes/scores.routes");//requiring the scores route and path 


app.use(express.static("./public"));//setting up the server to host the public directory
app.use(express.json());//converts all requests to the server into json files 
app.use("/", questionlist);//establishing route to questionlist route
app.use("/", scores);//establishing route to scores route

app.listen(8080, _ => console.log("Server is running"));//to establish a port of 8080, 
//telling the server to listen to 8080 specifically in the browswer, 
//the terminal will display Server is running, if connected properly