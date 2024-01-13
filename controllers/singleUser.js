const mongodb = require("../database");
const ObjectId = require("mongodb").ObjectId;

const getSingle = async (req, res) => {
  const userId = req.params.id;
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const result = await mongodb
      .getDatabase()
      .db("csewk1-2")
      .collection("users")
      .find({ _id: new ObjectId(userId) });

    const users = await result.toArray();

    if (users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getSingle;
