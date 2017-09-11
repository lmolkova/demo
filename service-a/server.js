'use strict';

const express = require('express');
const request = require('request');
const appInsights = require("applicationinsights");
appInsights.setup("acd0b915-b0e3-4dd2-b96a-e7ed21dcde2a");
appInsights.start();

// Constants
const PORT = 8089;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var url ='http://service-b:5000/api/values/' + Math.floor(Math.random() * 100);
  
  console.log('Starting request: GET', url); // Print the response status code   
  request(url, function (error, response, body) {
      console.log('Response statusCode: %s, body: %s', response && response.statusCode, body);
    });
    
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);