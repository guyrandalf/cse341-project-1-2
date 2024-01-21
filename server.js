const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongodb = require("./database");

const PORT = process.env.port || 8080;

app.use(bodyParser.json());
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Web Service running on PORT: ${PORT}, alongside a database`);
  }
});
