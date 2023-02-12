# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.
- updating UI with the current temprature of a city using its zip code.
- updating UI with also the date, and the user feeling.

## Instructions
First of all, I started to install the init to initialie  the node.js install the files related to the project like package.json and package-lock.json. Then I install the express, cors, body parser.

### server file
I started to setup empty JS object to act as endpoint for all routes. After that to run server and routes so i have to use require express then i start up an instance of app that we are going to build in a file called server.js, once i created an instance of app using express, so i connected the other packages that i have installed on the command line to app with code .use() method.

Then i used body-parser as a middleware to be an internal part of the express framework. After that i used cors package for cross origin allowance.

I started to create the local server by setting a variable on port 4000 by using .listen() method then i passed listen method with two arguments as port and listening. Listening argument refers to a callback function .

After that i used Get Route to return the JS object endpoint and send the response project data to the user.

Then I used Post Route to receive data and save it and in order to access the body of the post so I used request.body to spread the data to the project data.

### app.js file

I stared to write down the API key after I created my API credentials on (https://www.openWeatherMap.com) and also write down the URL that is related with the zip code. I used units metric to get the temprature degree return back as Celsius.

In order to get the temprature degree so i have to introduce the generate botton through variable then i will add event listener to add function to the excisting DOM element so when the user click on generate botton so I will get the zipcode and the content. If the user did not enter the zip code so it will alert 'Enter Zip code' so that i used if else condition. Then i post data with two argument URL and the object to get the date, temp and contact by using .then()
 
After that i started to talk with external API through fetch to send request so that i used async and that mean that the response will not happend at the same time and i saved it in a variable response then i used jason to make it clear. In addition i used try and catch to catch any error could happen.

After that I used Post data function by using async and await to execute asynchronous JavaScript code. when i used functionasync so i have access to try and catch to resole or reject to execute a task. Also I used to Match body data type to the Content-Type by using body: JSON.stringify(data).

Then i used Get project data function by using asyn and await and beacause to update the UI function depeneds on data from each other function .

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.
