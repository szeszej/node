const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("Error");
    callback(undefined, "Result");
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
