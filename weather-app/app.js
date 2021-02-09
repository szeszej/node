const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ba9d10fcb561e8f08bac12df4da64d40&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
