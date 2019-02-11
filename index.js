const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

// const selectAll = "SELECT * FROM record ORDER BY score DESC LIMIT 3";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "geo_guessr"
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }
//   console.log("Connected to the MySQL server.");
// });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // connection.query(selectAll, (err, results) => {
  //   if (err) {
  //     return res.send(err.message);
  //   }
    var string = "TIM";
    string = "GeoGuessr Champion Board: " + string;
    return res.send(string);
  });
// });

app.post('/score',function(req,res){
  var username=req.body.user;
  var score=req.body.score;
  var link=req.body.link;
  console.log("User name = "+username+", score is "+score+", link is "+link);
  res.end("yes");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));
