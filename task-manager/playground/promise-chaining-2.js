require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("6032bf6ecdd60e0204b29cda")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log(count));

const deleteAndCount = async (id) => {
  const user = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteAndCount("602ecacebf1132096c263138")
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
