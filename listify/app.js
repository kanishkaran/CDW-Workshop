const express = require("express");
const ENV = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

const taskRoute = require('./routes/taskRoutes');

ENV.config();

app.use(bodyParser.json());

app.use("/", taskRoute.route)

let port = process.env.PORT;

app.listen(port, () => {
    console.log("App is running");
});
