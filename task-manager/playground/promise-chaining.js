require("../src/db/mongoose");
const User = require("../src/models/user");

User.findOneAndUpdate({ _id: "6032973903f8321b8cd97cda" }, { age: 3 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 3 });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
