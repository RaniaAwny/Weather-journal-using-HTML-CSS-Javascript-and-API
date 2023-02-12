// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes

const express = require("express");

// Start up an instance of app

const app = express();

// Dependencies

const bodyParser = require("body-parser");

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// cors for cross origin allowance

const cors = require("cors");

app.use(cors());

// Initialize the main project foldernpm

app.use(express.static("website"));

// Setup Server

const port = 4000;

// set variable named server and pass the listen method with two arrgument

const server = app.listen(port, listening);

function listening() {
  console.log(`server running`);

  console.log(`server is running on localhost: ${port}`);
}

// respose from the server when a Get route

app.get("/getWeather", (req, res) => {
  res.send(projectData);
});

app.post("/all", (req, res) => {
  projectData = req.body;
  res.send(projectData);
});

