const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Rohan requires aid!");
});

app.get("/about", (req, res) => {
  res.send("It's all about us!");
});

app.get("/weather", (req, res) => {
  res.send("Current weather for you convenience!");
});

app.listen(5000, () => {
  console.log("Server started!");
});
