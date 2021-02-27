require("../src/db/mongoose");
const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findOneAndUpdate({ _id: id }, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("6032973903f8321b8cd97cda", 5)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
