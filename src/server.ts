import bodyParser from "body-parser";
import express, { RequestHandler } from "express";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();

app.use(bodyParser.json() as RequestHandler);
app.use(bodyParser.urlencoded({ extended: true }) as RequestHandler);

mongoose.connect(process.env.MONGOURL!);

const port = 3300;

// SimpleRoutes
const sampleUserRoute = require("./routes/login");
app.use("/user", sampleUserRoute);

app.listen(port, () => {
  console.log("Sever is up and running");
});
