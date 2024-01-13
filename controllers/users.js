const mongodb = require("../database");

const getAll = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db("csewk1-2")
    .collection("users")
    .find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

module.exports = getAll
