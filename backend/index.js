const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'assets')))


const cors = require("cors");
const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token", "authorization"]
};
app.use(cors(corsOption));

mongoose.connect("mongodb://localhost:27017/product", {
  useNewUrlParser: true
});

/* set api routes */
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

/* set static path */
app.use(express.static(path.join(__dirname, "build")));

/* serve react build for other routes */
app.get("/*", ({ }, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* set port */
const port = process.env.PORT || 8081;

/* create server */
const server = http.createServer(app);

/* listen server to the port */
server.listen(port, () => {
  console.log(`App listening to port ${port}`);
});

module.exports = app;