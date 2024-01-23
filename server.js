const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const mongodb = require("./database");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const PORT = process.env.port || 8080;

app
  .use(bodyParser.json())
  .use(cors())
  .use("/", require("./routes"))
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Web Service running on PORT: ${PORT}, alongside a database`);
  }
});
