import express from "express";
import bodyParser from "body-parser";

const APP = express();
const PORT = 5000;

APP.use(bodyParser.json());

APP.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
