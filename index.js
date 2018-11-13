const serverless = require("serverless-http");
const express = require("express");
const app = express();
const ipsum = require("lorem-ipsum");

app.get("/", function(req, res) {
  message = ipsum();
  res.send(message);
});

module.exports.handler = serverless(app);
