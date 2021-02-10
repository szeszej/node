const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Krzysiek",
      age: 34,
    },
    { name: "Sarah" },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>It's all about us!</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ location: "Świdnik", forecast: "It's raining men!" });
});

app.listen(5000, () => {
  console.log("Server started!");
});
