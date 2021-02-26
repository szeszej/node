require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndRemove("6032bf6ecdd60e0204b29cda")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => console.log(count));
